const express = require('express'); //Line 1
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const userP = require('./userPass.json');
const { MongoClient } = require('mongodb');
const { GridFSBucket } = require('mongodb');
const { assert } = require('console');

const app = express(); //Line 2
const port = 3001; //Line 3

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());

const userPass = userP['username'] + ":" + userP['password'];

const uri = "mongodb+srv://" + userPass + "@micro-organisms.1kisu.mongodb.net/micro-organisms?retryWrites=true&w=majority"

const client = new MongoClient(uri);

try {
  client.connect();
  var db = client.db("micro-organisms").collection("micro-organisms");
  console.log("Database Connected");
}
catch {
  console.log("Error");
}

const bucket = new GridFSBucket(client.db("micro-organisms"));

app.get("/home", (req,res) => {
    res.send("Express is connected")
})

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, 'public/');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    }
});  

const upload = multer({storage: storage})

app.post("/home", upload.single('file'), (req, res) => {
    if (!req.file) {
        res.sendStatus(500);
    }
    console.log(req.file);
});

app.post("/upload", (req, res) => {
  fs.createReadStream('./public/mando.jpeg').pipe(bucket.openUploadStream('mando.jpeg')).on('error', function(error) {assert.ifError(error);});
  
  console.log('mando.jpeg');
  res.send("Done");
});

app.get("/download", (req, res) => {
  bucket.openDownloadStreamByName('mando.jpeg').pipe(fs.createWriteStream('./public/mandodb.jpeg')).on('error', function(error) {
      assert.ifError(error);
      console.log("error");
    }).on('finish', function() {
      console.log('Done!');
    });
});

app.listen(port, () => console.log("Server is up"))