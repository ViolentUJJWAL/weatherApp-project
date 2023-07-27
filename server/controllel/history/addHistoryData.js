const history = require("./../../model/historySchema")

async function addHistory(req,res){
    let data = await {
        email: req.body.email,
        lat: req.body.lat,
        lon: req.body.lon,
        city: req.body.city,
        time: new Date()
    }
    try{
        let createHistory = await history.create(data);
        res.json({
            meg: "added history",
            data: createHistory
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = addHistory