const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/TaiKhoanDangNhap',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    username: String,
    password: String
},{
    collection: 'id'
});

const AccountModel = mongoose.model('id',AccountSchema)

module.exports = AccountModel