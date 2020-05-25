var mongoose = require('mongoose');

var extraSchema  = new mongoose.Schema({
    extra : String
});

// var Extra = mongoose.model("Extra",extraSchema);

// Extra.create(
//     {
//         extra : "Organized TECHUMEN'19. The Mega event of ACSES having a participation of around 1300 students",
//     },function(err,extra){
//         if(err){

//         }else{
//             console.log("success");
//         }
//     }
// );
// Extra.create(
//     {
//         extra : "Managed and hosted Alumni Meet 2020 for CSE department",
//     },function(err,extra){
//         if(err){

//         }else{
//             console.log("success");
//         }
//     }
// );
// Extra.create(
//     {
//         extra : "Organized and delivered sessions in C Programming workshop 2019",
//     },function(err,extra){
//         if(err){

//         }else{
//             console.log("success");
//         }
//     }
// );
// Extra.create(
//     {
//         extra : "Volunteering - Social IT Awareness Campaign (2018 - present)",
//     },function(err,extra){
//         if(err){

//         }else{
//             console.log("success");
//         }
//     }
// );
// Extra.create(
//     {
//         extra : "Attended Basic and Advanced Mechatronics training by Siemens",
//     },function(err,extra){
//         if(err){

//         }else{
//             console.log("success");
//         }
//     }
// );
// Extra.create(
//     {
//         extra : "Attended Soft Skills Workshops by Growth Center",
//     },function(err,extra){
//         if(err){

//         }else{
//             console.log("success");
//         }
//     }
// );
module.exports = mongoose.model("Extra",extraSchema);