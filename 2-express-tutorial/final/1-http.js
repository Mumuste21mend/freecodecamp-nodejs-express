const http = require('http')
const { readFileSync } = require('fs');
// get all files
const homePage = readFileSync('../navbar-app/index.html')
const homeStyle = readFileSync('../navbar-app/styles.css')
const homeImage = readFileSync('../navbar-app/logo.svg')
const homeLogic = readFileSync('../navbar-app/browser-app.js')

http
    .createServer()
    .on('request', (req, res) => {
        const url = req.url
        if (url === '/') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(homePage)
            return res.end()

        } else if (url === '/about') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<h1> About page </h1>')
            return res.end()
        } else if (url === '/styles.css') {
            res.writeHead(200, { 'content-type': 'text/css' })
            res.write(homeStyle)
            return res.end()
        } else if (url === '/logo.svg') {
            res.writeHead(200, { 'content-type': 'image/svg+xml' })
            res.write(homeImage)
            return res.end()
        } else if (url === '/browser-app.js') {
            res.writeHead(200, { 'content-type': 'text/javascript' })
            res.write(homeLogic)
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