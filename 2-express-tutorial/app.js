const http = require('http')
const { readFileSync } = require('fs');
// get all files
const homePage = readFileSync('./index.html')

http
    .createServer()
    .on('request', (req, res) => {
        const url = req.url
        if (url === '/') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(homePage)
            return res.end()

        } else
            if (url === '/about') {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write('<h1> About page </h1>')
                return res.end()
            } else {
                res.writeHead(404, { 'content-type': 'text/html' })
                res.write('<h1>error </h1>')
                return res.end()
            }

    })
    .listen(5000, () => {
        console.log("listenin to the port 5000")
    })