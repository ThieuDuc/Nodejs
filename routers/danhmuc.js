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

// Lay 1 du lieu tu data
router.get('/:id',(req,res,next)=>{
    var id = req.params.id
    DanhMucModel.findById(id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})

// Them moi du lieu
router.post('/',(req,res,next)=>{
    var ten_danh_muc = req.body.ten_danh_muc
    var mo_ta = req.body.mo_ta
    DanhMucModel.create({
        ten_danh_muc: ten_danh_muc,
        mo_ta: mo_ta

    })
    .then(data=>{
        res.json('Them tai khoan thanh cong')
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})

// Update du lieu
router.put('/:id',(req,res,next)=>{
    // Lay id
    var id = req.params.id
    var newten_danh_muc = req.body.newten_danh_muc
    var newmo_ta = req.body.newmo_ta
    DanhMucModel.findByIdAndUpdate(id , {
        ten_danh_muc:newten_danh_muc,
        mo_ta: newmo_ta
    })
    .then(data=>{
        res.json('Update thanh cong ')
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})

// Xoa du lieu
router.delete('/:id',(req,res,next)=>{
    var id = req.params.id
    DanhMucModel.deleteOne({
        _id: id
    })
    .then(data=>{
        res.json('Xoa du lieu thanh cong')
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})
module.exports = router1;