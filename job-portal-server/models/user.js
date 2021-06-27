let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
    firstName: {type: String, trim: true,sparse:true},
    lastName: {type: String, trim: true,sparse:true},
    password: {type: String,sparse:true, default:''},
    email: {type: String,sparse :true, unique: true},
    accessToken:{type:String,trim:true,sparse:true},
    status: { type: Number, default: 3} // 1 for active // 2 for inactive // 3 for email verification pending
    
}, { timestamps: true })

module.exports = mongoose.model('User', User);