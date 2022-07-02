const http = require('http');
// the default way call back from the http module  

const server = http.createServer((req, res) => {
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

server.listen(5000, () => {
    console.log('listening on port 5000')
})