const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


// MATH CALC
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {  
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send("Result is " + result);
});


// BMI CALC
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {  
    var result = parseFloat(req.body.weight) * parseFloat(req.body.height);
    res.send("Your BMI is " + result);
});



app.listen(3000, function(req, res){
    console.log("Server started on port 3000");
});