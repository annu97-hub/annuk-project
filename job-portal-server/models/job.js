let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Job = new Schema({
    postName: {type: String, trim: true,sparse:true},
    companyName: {type: String, trim: true,sparse:true},
    package: {type: String,sparse:true, default:''},
}, { timestamps: true })

module.exports = mongoose.model('Job', Job);