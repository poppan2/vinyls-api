const express = require("express");
const router = express.Router();
const Vinyl = require("../models/vinyl");

router.post("/", (req, res) => {
  Vinyl.create(req.body)
    .status(201)
    .then((vinyl) => {
      res.json(vinyl);
    });
});

router.get("/", (req, res) => {
  Vinyl.find({}).then((vinyls) => {
    res.json({
      status: 200,
      vinyls: vinyls,
    });
  });
});

router.put("/:id", (req, res) => {
  Vinyl.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .status(200)
    .then((vinyl) => {
      res.json(vinyl);
    });
});

//status 204, dont rly need to return anything
router.delete("/:id", (req, res) => {
  Vinyl.findByIdAndDelete(req.params.id).then(() => {
    Vinyl.find({}).then((vinyls) => {
      res.json(vinyls);
    });
  });
});

module.exports = router;
