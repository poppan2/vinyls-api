const express = require('express')
const router = express.Router();
const Vinyl = require('../models/vinyl')


router.post('/', (req,res)=>{
    Vinyl.create(req.body).then((vinyl)=>{
        res.json(vinyl)
    })
    
})

router.get('/', (req,res)=>{
    Vinyl.find({}).then((vinyls)=>{
        res.json({
            status: 200,
            vinyls: vinyls
        })
    })
})

router.put('/:id', (req,res)=>{
    res.json('Put Route Works')
})

router.delete('/:id', (req,res)=>{
    res.json('Delete Route Works')
})


module.exports = router;