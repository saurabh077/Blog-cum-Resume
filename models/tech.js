var mongoose = require('mongoose');
var techSchema = new mongoose.Schema({
    skill : "String",
});

// var Tech = mongoose.model("Tech",techSchema);

// Tech.create(
//     {
//         skill : "Programming Languages: C, C++, Core Java",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );
// Tech.create(
//     {
//         skill : "Open Mp",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );
// Tech.create(
//     {
//         skill : "Data Structures and Algorithms",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );
// Tech.create(
//     {
//         skill : "Object- Oriented Programming",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );
// Tech.create(
//     {
//         skill : "Software Engineering",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );
// Tech.create(
//     {
//         skill : "Operating Systems",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );
// Tech.create(
//     {
//         skill : "Database Management Systems",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );
// Tech.create(
//     {
//         skill : "Web Development: HTML, CSS, Node JS (Novice)",
//     },function(err,tech){
//         if(err){}
//         else{
//             console.log("Sucess");
//         }
//     }
// );

module.exports = mongoose.model("Tech",techSchema);