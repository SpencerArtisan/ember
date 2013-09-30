var fs = require('fs');
var vm = require('vm');
var jq = require('jquery');
var hb = require('handlebars');

// ember library (tested with v1.0.0-pre.4)
var emberscript = fs.readFileSync('libs/ember-1.0.0.js', 'utf8');
// extension of the template files
var ext = "tpl"
// folder which contains the templates
var sourceFolder = '.';
// destination file
var destFile = 'out.js';

// dummy document
var doc = { createRange: {}, createElement: function() { return {firstChild:{}, childNodes: [0,0,0,0,0]}; }, innerHTML: function () { return {firstChild:{}, childNodes: [0,0,0,0,0]}; }};

// fake browser context
var context = vm.createContext({ window:{document:doc}, document:doc, jQuery: jq, Handlebars: hb});

// load ember into the fake browser
vm.runInContext(emberscript, context);

var js = '';

var templateFiles = fs.readdirSync(sourceFolder);
for (var i=0; i<templateFiles.length; i++) {

    var filename = templateFiles[i];
    var index = filename.lastIndexOf('.');
    var fileext = (index < 0) ? '' : filename.substr(index+1);

    if(fileext !== ext)
        continue;

    var basefilename = filename.substr(0, filename.length - (ext.length + 1));
    var file = sourceFolder + '/' + filename;

    // blend the template into the context, run the precompiler and fetch the compiled template
    context.rawTemplate = fs.readFileSync(file, 'utf8');
    vm.runInContext('cmpTemplate = Ember.Handlebars.precompile(rawTemplate).toString();', context);
    js += 'Ember.TEMPLATES["' + basefilename + '"]=Handlebars.template(' + context.cmpTemplate + ');\n';
}

fs.writeFileSync(destFile, js, 'utf8');
