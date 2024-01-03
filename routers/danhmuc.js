const express = require('express');
var router1 = express.Router();
const DanhMucModel = require('../Models/danhmuc')
// lay du lieu

router1.get('/danhmuc',(req,res,next)=>{
    DanhMucModel.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})


module.exports = router1;