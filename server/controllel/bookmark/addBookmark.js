const bookmark = require("../../model/bookmarkSchema");

async function addBookmark(req, res) {
    let data = await {
        email: req.body.email,
        lat: req.body.lat,
        lon: req.body.lon,
        city: req.body.city
    }
    try {
        let findBookmark = await bookmark.find({
            $and:
                [
                    { "email": { $eq: data.email } },
                    { "city": { $eq: data.city } }
                ]
        })
        if(findBookmark.length == 0){
            let createBookmark = await bookmark.create(data);
            res.json({
                meg: "added bookmark",
                data: createBookmark
            })
        }else{
            res.json({
                meg: "aledy added bookmark",
                data: findBookmark
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = addBookmark