require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require('cors')

PORT = process.env.PORT;

app.use(cors())
app.use(morgan("combined"));
app.use(express.urlencoded({extended: true}))
app.use(express.json())


const vinylController = require('./controllers/vinyl')
app.use('/vinyls', vinylController)

app.listen(PORT, () => {
  console.log(`We rolling on Port ${PORT}`);
});
