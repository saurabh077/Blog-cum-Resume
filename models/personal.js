var mongoose = require('mongoose');
var personalSchema = new mongoose.Schema({
    qualification : String,
    institute : String,
    stream : String,
    year : String,
    grades : Number
});

//var Personal = mongoose.model("Personal",personalSchema);

// Personal.create(
//     {
//         qualification : "SSC",
//         institute: "Shree Shivaji High School, Yavatmal",
//         year : '2015',
//         stream : "-",
//         grades : 93.40
//     },function(err,personal){
//         if(err){

//         }else{
//             console.log("Success");
//         }
//     }
// );
// Personal.create(
//     {
//         qualification : "HSC",
//         institute: "Peoples Junior College, Yavatmal",
//         year : '2017',
//         stream: "PCM",
//         grades : 88.77
//     },function(err,personal){
//         if(err){

//         }else{
//             console.log("Success");
//         }
//     }
// );
// Personal.create(
//     {
//         qualification : "BTech",
//         institute: "Walchand College of Engineering, Sangli",
//         year : '2021',
//         stream : "Computer Science and Engineering",
//         grades : 8.3
//     },function(err,personal){
//         if(err){

//         }else{
//             console.log("Success");
//         }
//     }
// );
module.exports = mongoose.model("Personal",personalSchema);