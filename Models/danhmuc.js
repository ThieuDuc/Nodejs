const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const DanhmucSchema = new Schema({
    ten_danh_muc: String,
    mo_ta: String
},{
    collection: 'id'
});

const DanhMucModel = mongoose.model('id',DanhmucSchema)

module.exports = DanhMucModel