const mongoose = require("mongoose")


function connectDb(URL) {
    // mongo db connecting.
    const dburl = URL
    mongoose.connect(dburl)
        .then((db) => {
            console.log("DataBase connected with", URL)
        }).catch((err) => {
            console.log(err)
        })
}

module.exports = connectDb