// importing the path module
const path = require('path')

// separator property
const separatorProp = path.sep
console.log("Separator: ", separatorProp)

// join method
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// getting the base name
const base = path.basename(filePath)
console.log(base)

// Getting the absolute path of test.txt
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)