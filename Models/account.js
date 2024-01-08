const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
},{
    collection: 'id'
});

const AccountModel = mongoose.model('id',AccountSchema)

module.exports = AccountModel