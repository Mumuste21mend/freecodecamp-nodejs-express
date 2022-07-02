const { readFile, writeFile } = require('fs')
console.log("start ")

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    console.log("start task1")
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        console.log("start task2")
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first},${second} `, (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log(result)
            })
        console.log("done with task2")
    })
    console.log("done with task1")
})
console.log("done")

