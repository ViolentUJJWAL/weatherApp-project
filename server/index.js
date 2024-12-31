const addBookmark = require("./controllel/bookmark/addBookmark");
const delBookmark = require("./controllel/bookmark/delBookmark");
const addHistory = require("./controllel/history/addHistoryData");
const delHistory = require("./controllel/history/delHistory");
const getData = require("./controllel/sendData");
const connectDb = require("./db")
const path = require("path")
const express = require("express")
const cors = require("cors")

const app = express();

require("dotenv").config()

app.use(cors())

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json())

const userRouter = express.Router();

app.use("/user", userRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

userRouter.route("/data/:email")
    .get(getData)

userRouter.route("/history")
    .post(addHistory)

userRouter.route("/history/:id")
    .delete(delHistory)

userRouter.route("/bookmark/:id")
    .delete(delBookmark)

userRouter.route("/bookmark")
    .post(addBookmark)

app.listen(8000, async () => {
    const URL = process.env.DB_URL
    await connectDb(URL)
    console.log("Server start in PORT: 8000");
})
