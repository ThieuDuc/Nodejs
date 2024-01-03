const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser') 
const AccountModel = require('./Models/account')
const DanhMucModel = require('./Models/danhmuc')
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
})

var accountRouter = require('./routers/account')
app.use('/api/account/',accountRouter)

app.use('/public',express.static(path.join(__dirname,'/public')))
app.get('/',function(req, res){
    var danFile = path.join(__dirname,'home.html')
    res.sendFile(danFile)
})

app.listen(4000, () => {
    console.log(`Sever started on post`)
  })