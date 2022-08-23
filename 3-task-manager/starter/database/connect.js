const mongoose = require("mongoose");

mongoose.set('debug', true)

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            // not sure what all this means 
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}
module.exports = connectDB