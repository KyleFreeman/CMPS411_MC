const express = require('express'); //Line 1
const cors = require('cors');
const multer = require('multer');

const app = express(); //Line 2
const port = 3001; //Line 3

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

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

app.listen(port, () => console.log("Server is up"))