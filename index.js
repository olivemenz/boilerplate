const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://peterlim:271639@boilerplate.2ndqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    }
  )
  .then(() => console.log("mongoDB Connected...."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!-안녕하세요");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
