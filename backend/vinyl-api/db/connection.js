const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/vinyls",
  { useNewUrlParser: true },
  () => {
    console.log("We're connected");
  }
);
// mongoose.connect(
//   "mongodb://127.0.0.1/vinyls",
//   { useNewUrlParser: true },
//   () => {
//     console.log("We're connected");
//   }
// );

module.exports = mongoose;
