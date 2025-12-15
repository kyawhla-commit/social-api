const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

const { userRouter } = require("./routes/user.js");
app.use("/users", userRouter);

const { postRouter } = require("./routes/post.js");
app.use("/posts", postRouter);

const { commentRouter } = require("./routes/comment.js");
app.use("/comments", commentRouter);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log(`Social API running at ${PORT}...`);
});
