var mongoose = require("mongoose");
var  projectSchema = new mongoose.Schema({
    no: Number,
    title: String,
    desc: String,
    period: String,
    link: String
});
module.exports = mongoose.model("Projects", projectSchema);


// Projects.create(
//     {
//         no: 1,
//         title:"Traffic Signs Classification",
//         desc:"The project is developed using Keras and Deep Learning. A Convolutional Neural Network Model classifies the traffic signs into the classes. These classes define the type of the traffic signs",
//         period: "Jan 2020 - May 2020",
//         link: ""
//     },function(err,project){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Project added");
//             console.log(project);
//         }
//     }
// );
// Projects.create(
//     {
//         no: 2,
//         title:"PERFORMANCE ANALYSIS OF PARALLEL IMAGE PROCESSING OPERATIONS",
//         desc:"A C language project using OpenMp API to parallelize the implementation. To reduce the time required to process the images and perform basic operations like Image Blurring, Edge Detection, Contrast Stretching, Negation on each cores simultaneously",
//         period: "Aug 2019 - Nov 2019",
//         link: ""
//     },function(err,project){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Project added");
//             console.log(project);
//         }
//     }
// );
// Projects.create(
//     {
//         no:3,
//         title:"NODE.JS WEB APPLICATION TO MANAGE EXPENSES",
//         desc:"A web application which maintains the daily expenses of an individual. Technologies used: Front end HTML, CSS, Bootstrap backend : Node.js, Express, Mongodb",
//         period: "Dec 2019 - Dec 2020",
//         link: ""
//     },function(err,project){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Project added");
//             console.log(project);
//         }
//     }
// );
// Projects.create(
//     {
//         no:4,
//         title:"LIBRARY MANAGEMENT SYSTEM",
//         desc:"Library Management System providing the facilities of a general library system. Developed using C language.",
//         period: "March 2018 - April 2018",
//         link: ""
//     },function(err,project){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Project added");
//             console.log(project);
//         }
//     }
// );