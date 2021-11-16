const mongoose = require('../db/connection')

const vinylSchema = new mongoose.Schema({
    artistName: String,
    albumName: String
})

module.exports = mongoose.model('Vinyl', vinylSchema)