var mongoose = require('mongoose');
var writingSchema = mongoose.Schema({
    title : String,
    content: String,
});

// var Writings = mongoose.model("Writings",writingSchema);

// Writings.create(
//     {
//         title:"Who lives away from home",
//         content: " The moment came to leave the home and to leave the whole \
//         With the heavy steps and the feelings in my soul \
//         \
//         This is not just the distance which is about a day,\
//         It's about the emotions accounting a bay.\
//         \
//         All the memories buried deep inside \
//         I have to move leaving all reasons beside\
//         \
//         With the heavy heart again, I  passed the gate\
//         Yes it's my decision and my fate.\
//         \
//                                       -A Thought of Mind..."
//     }
// );
module.exports = mongoose.model("Writings",writingSchema);