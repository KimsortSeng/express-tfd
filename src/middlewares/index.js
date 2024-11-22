function requestLogger (req, res, next){
    console.log(req.headers['user-agent'])
    next()
}

function middlware(req, res, next){
    //Middleware to check if a requset is authenticated or not?
    const loing = true
    if (!loing) {
        return res.send("Unanthenticated!")
    }
    next()
}

module.exports = {requestLogger, middlware}