// importing the file system methods
const { readFileSync, writeFileSync } = require('fs')

// reading the files
// we pass the  file path and the encoding (utf8)
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// displaying the file content
console.log(first, second)

// writing to a file
writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`,
{flag: 'a'})