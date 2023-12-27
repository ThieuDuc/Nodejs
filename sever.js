const express = require('express')
const app = express()
var bodyParser = require('body-parser') 
const AccountModel = require('./Models/account')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Dang Ki 
app.post('/register',(req , res , next)=>{
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
})

// Dang Nhap
app.post('/login',(req,res,next)=>{
    var username = req.body.username
    var password = req.body.password

    AccountModel.find({
        username: username,
        password: password
    })
    .then(data=>{
        if(data){
            res.json('Dang Nhap Thanh Cong')
        }else{
            res.status(400).json('Chuc Ban May Man Lan Sau')
        }
    })
    .catch(err=>{
        res.status(500).json('Co Loi Ben Sever')
    })
})

var accountRouter = require('./routers/account')
app.use('/api/account/',accountRouter)

app.get('/',(req, res, next)=>{
    res.json("HOME")
})

app.listen(4000, () => {
    console.log(`Sever started on post`)
  })