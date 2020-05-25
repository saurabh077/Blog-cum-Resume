var mongoose = require('mongoose');

var acheivementsSchema = new mongoose.Schema({
        ach : String,
});
// var Achievements = mongoose.model("Achievements",acheivementsSchema);

// Achievements.create(
//     {
//         ach: "Author: Performance Analysis of Parallel Image Processing Operations. 9th International Conference on Communication and Signal Processing sponsored by IEEE",
//     },function(err,ach){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("ach added");
//             console.log(ach);
//         }
//     }
// );
// Achievements.create(
//     {
//         ach: "SIH 2020 Internal Hackathon Winner",
//     },function(err,ach){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("ach added");
//             console.log(ach);
//         }
//     }
// );
// Achievements.create(
//     {
//         ach: "Finalist Code Junkie - A coding competition organized at MindSpark 2018 at COEP",
//     },function(err,ach){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("ach added");
//             console.log(ach);
//         }
//     }
// );
// Achievements.create(
//     {
//         ach: "Siemens Scholar - Siemens Scholarship holder",
//     },function(err,ach){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("ach added");
//             console.log(ach);
//         }
//     }
// );
module.exports = mongoose.model("Achievements",acheivementsSchema);
