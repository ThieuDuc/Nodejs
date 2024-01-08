const AccountModel = require('../Models/account')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

// Dang Ky
exports.register = (req , res , next) =>{
    var username = req.body.username
    var password = req.body.password
    AccountModel.findOne({
        username: username
    })
    
    .then(data=>{
        if(data){
            res.json('Tai Khoan Da Ton Tai')
        }else{
            return AccountModel.create({
                username: username,
                password: password
            })
        }
    })
    .then(data=>{
        res.json('Tao tai khoan thanh cong')
    })
    .catch(err=>{
        res.status(500).json('Chuc ban may man lan sau')
    })
}

// Dang Nhap
exports.login = async(req,res,next)=>{
    var username = req.body.username
    var password = req.body.password

    AccountModel.find({
        username: username,
        password: password
    })
    .then(data=>{
        if(!data){
            res.json('Tai khoan hoac mat khau khong chinh xac')
        }
        const checkpassword = bcrypt.compareSync(Password, account.password);
        if (!checkpassword) {
            return res.status(501).json('Mật khẩu không chính xác');
        }
        else{
            res.status(400).json('Dang nhap thanh cong')
        }
    })
    .catch(err=>{
        res.status(500).json('Co Loi Ben Sever')
    })
}

// Lay all

exports.getAll = (req,res,next) => {
    AccountModel.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
}

// Lay 1 

exports.getOne = (req,res,next) => {
    AccountModel.findOne({})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.status(500).json('Loi sever')
    })
}
// Them du lieu
exports.create = (req, res , next) => {
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
}

// update
exports.update = (req,res,next) => {
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
}

// Xoa du lieu
exports.delete = (req , res , next) => {
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
}