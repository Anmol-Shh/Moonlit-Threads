const mongoose = require("mongoose")
exports.Cat = mongoose.model('cat', {name:String});