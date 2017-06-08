// required packages
var express = require("express");
var fs = require("fs");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var multer = require("multer");

var app = express();
// set up mongoose connection
if (!process.env.MONGODB_URI) {
    mongoose.connect("mongodb://localhost/PP")
  }
  else{
    mongoose.connect(process.env.MONGODB_URI)
  }

app.use(express.static("public"));

// set up mongo scheema
  var Item = new ItemSchema(
    { img:
        { data: Buffer, contentType: String }
    }
  );
  var Item = mongoose.model('Clothes',ItemSchema);
// using middleware multer to upload photo
  app.use(multer({ dest: "./uploads/",
 rename: function (fieldname, filename) {
   return filename;
 },
}));
// handle the post request
app.post("/api/photo",function(req,res){
 var newItem = new Item();
 newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
 newItem.img.contentType = "image/png";
 newItem.save();
});

var port;

if (!process.env.PORT) {
  port = 3000;
} else {
  port = process.env.PORT;
}
// Listen on port 3000
app.listen(port, function() {
  console.log("App running on port " + port);
});
