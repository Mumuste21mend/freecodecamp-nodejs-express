const express = require('express')
const path = require('path')
const app = express()
// setup static and middleware
// we can have the  server to send the html as static file  without creating a route for it 
app.use(express.static('./public'))
// alternative approach :
// adding to static assets 
// SSR
app.get('/', (req, res) => {
    // res.status(200).sendFile(path.resolve(__dirname, 'navbar-app', 'index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('resources not found')
})
app.listen(5000, () => {
    console.log("server is listening ")
})