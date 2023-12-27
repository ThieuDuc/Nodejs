const express = require('express');
var router = express.Router();
const AccountModel = require('../Models/account')

// Lay nhieu du lieu tu data
router.get('/',(req,res,next)=>{
    AccountModel.find({})
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
    AccountModel.findById(id)
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})
// Them moi du lieu
router.post('/',(req,res,next)=>{
    var username = req.body.username
    var password = req.body.password
    AccountModel.create({
        username: username,
        password: password

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
    var newpassword = req.body.newpassword

    AccountModel.findByIdAndUpdate(id , {
        password: newpassword
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
    AccountModel.deleteOne({
        _id: id
    })
    .then(data=>{
        res.json('Xoa du lieu thanh cong')
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
})

module.exports = router;