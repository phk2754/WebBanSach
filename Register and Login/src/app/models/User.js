const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosedelete = require('mongoose-delete');

const UserSchema = new Schema ({
    username : {type: String },
    password:{type: String },
    email:{type: String },
    sdt:{type: Number },
})

UserSchema.plugin(mongoosedelete, {deleteAt: true, overideMethods: true});

module.exports = mongoose.model('User', UserSchema);