var express    = require("express"),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    Blog       = require("./models/blogs"),
    Projects   = require("./models/projects"),
    Achievements = require("./models/achievements"),
    Extra       = require("./models/extra"),
    Personal    = require("./models/personal"),
    Tech        = require("./models/tech"),
    Blogs       = require("./models/blog"),
    fs          = require("fs");

const path = require('path');
//mongoose.connect("mongodb://localhost/blog");
//mongoose.connect("");

mongoose.connect("mongodb+srv://Saurabh:@Yavatmal_077{}@cluster0-ovakf.mongodb.net/Blog?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Saurabh:@Yavatmal_077{}@cluster0-ovakf.mongodb.net/Blog?retryWrites=true&w=majority";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err){
    console.log(err);
  }
 // console.log("Database created!");
  db.close();
});


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var dir = path.join(__dirname,'public');
app.set("view engine","ejs");

app.get("/",function(req,res){
    Blog.find({},function(err,allBlogs){
        if(err){
            console.log(err);
        }else{
            res.render("home",{allBlogs:allBlogs});
        }
    });
});

app.get("/project",function(req,res){
    Projects.find({},function(err,projects){
        if(err){
            console.log(err);
        }else{
            res.render("project",{projects:projects});
        }
    });
});
app.get("/extra",function(req,res){
    Extra.find({},function(err,extras){
        if(err){
            console.log(err);
        }else{
            res.render("extra",{extras:extras});
        }
    });
});
app.get("/achievements",function(req,res){
    Achievements.find({},function(err,acheivements){
        if(err){
            console.log(err);
        }else{
            res.render("acheivements",{acheivements,acheivements});
        }
    });
});
app.get("/personal",function(req,res){
    Personal.find({},function(err,personal){
        if(err){
            console.log(err);
        } else{
            res.render("personal",{personal:personal});
        }
    });
});
app.get("/blog",function(req,res){
    Blogs.find({},function(err,blogs){
        if(err){
            console.log(err);
        }else{
            res.render("blog",{blogs:blogs});
        }
    });
})
app.get('/resume', function (req, res) {
    var filePath = "/public/MyResume.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

var server = app.listen(3000,function(req,res){
     console.log('Server has Started..........');
 });