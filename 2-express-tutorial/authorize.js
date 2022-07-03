const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'mumuste') {
        req.user = { name: "mumuste", id: 3 }
        next()
    } else {
        res.status(401).send('unauthorized')
    }
}
// usage : checking if user has access to any page
module.exports = authorize;