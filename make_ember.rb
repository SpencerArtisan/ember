require 'ember_script'

def convert ember_file
  input = File.open(ember_file, "r").read
  output = EmberScript.compile(input)
  js_file = ember_file.gsub ".em", ".js"
  puts "Converting #{ember_file} to #{js_file}"
  File.open(js_file, "w").puts(output)
end

Dir.glob("js/*.em").each { |file| convert file }
