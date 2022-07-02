const http = require('http')
const fs = require('fs')

http
    .createServer((req, res) => {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text)
        let filestream = fs.createReadStream('./content/big.txt', { encoding: 'utf-8', highWaterMark: 90000 })
        filestream.on('data', (result) => {
            //  make the response a pipe  writablestream to stream data as chuncks to browser
            filestream.pipe(res)
        })
        filestream.on('error', (err) => {
            return res.end(err)
        })
    })
    .listen(5000)