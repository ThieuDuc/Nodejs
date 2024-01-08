const express = require('express')
const app = express()
const path = require('path')
var {db_connect} = require('./Config/db.config');
var bodyParser = require('body-parser') 
db_connect();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var accountRouter = require('./routers/account')
app.use('/api/account/',accountRouter)

var DanhMucRouter = require('./routers/danhmuc')
app.use('/api/danhmuc', DanhMucRouter)

// app.use('/public',express.static(path.join(__dirname,'/public')))
// app.get('/',function(req, res){
//     var danFile = path.join(__dirname,'home.html')
//     res.sendFile(danFile)
// })
app.get('/', (req, res, next) => {
    res.json('HOME') 
})

app.listen(4000, () => {
    console.log(`Sever started on post`)
  })