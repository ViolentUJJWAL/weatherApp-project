const history = require("./../model/historySchema")
const bookmark = require("./../model/bookmarkSchema")


async function getData(req,res){
    let email = await req.params.email
    console.log(req.params)
    let historyData = await history.find({ email: {$eq: email }});
    let bookmarkData = await bookmark.find({email: {$eq: email}});
    res.json({
        email: email,
        history: historyData,
        bookmark: bookmarkData
    })
}

module.exports = getData