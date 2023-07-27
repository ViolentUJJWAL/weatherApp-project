const bookmark = require("../../model/bookmarkSchema");

async function delBookmark(req,res){
    let id = req.params.id
    try{
        let delData = await bookmark.deleteOne({_id: {$eq: id}});
        res.json({
            meg: "delete bookmark",
            data: delData
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = delBookmark