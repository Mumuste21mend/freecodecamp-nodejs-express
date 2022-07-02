
const http = require('http')
const server = http.createServer()
//using the Event Emitter API 
// emits request event 
// subscribe to it /listen for it/ respond to it
server.on('request', (req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        return res.end('here is our about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>we can't seem to find the page you were looking for !</p>
        <a href='/' > back home </a>
        `)

})
server.listen(8000)
