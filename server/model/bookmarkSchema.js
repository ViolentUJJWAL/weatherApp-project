const mongoose = require("mongoose")
const useSchema = new mongoose.Schema({
    email: {
        type: "string",
        required: true
    },
    city: {
        type: "string",
        required: true,
    },
    lat: {
        type: "Number",
        required: true
    },
    lon: {
        type: "Number",
        required: true
    }

})


// model -> means create user data and store on database.
// NOTE: "user" is a name of store folder or directry in DB.
// you can create a dataStore function createModel and argument is user, userSchema and userdata.
const bookmark = mongoose.model("bookmark", useSchema);


module.exports = bookmark