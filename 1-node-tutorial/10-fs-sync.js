const { readFileSync, writeFileSync } = require('fs')

console.log("start task")
const first = readFileSync('./content/first.txt', 'utf-8')
console.log("done with task")

console.log("start task 1")
const second = readFileSync('./content/test.txt', 'utf-8')
console.log("done with task 1")
console.log(first, second)
console.log("start task 2")
writeFileSync(
    './content/result-sync.txt',
    `here is the result:${first} , ${second}`,
    { flag: 'a' }
)
console.log("done with task 2")