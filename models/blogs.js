var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    desc:String,
    redirect:String
});
module.exports = mongoose.model("Blog",blogSchema);