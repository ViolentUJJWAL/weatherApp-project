const history = require("../../model/historySchema");

async function delHistory(req,res){
    let id = req.params.id
    try{
        let delData = await history.deleteOne({_id: {$eq: id}});
        res.json({
            meg: "delete history",
            data: delData
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = delHistory