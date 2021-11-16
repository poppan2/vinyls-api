require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();

PORT = process.env.PORT;

app.use(morgan("combined"));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.get("/", (req, res) => {
//   res.json("hello world");
// });

const vinylController = require('./controllers/vinyl')
app.use('/vinyls', vinylController)

app.listen(PORT, () => {
  console.log(`We rolling on Port ${PORT}`);
});
