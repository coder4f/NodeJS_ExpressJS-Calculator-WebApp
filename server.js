const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    
    res.send("The result is: " + result);
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = Number(req.body.w);
    var height = Number(req.body.h);
    var bmi = weight / (height ** 2);
    bmi = bmi.toFixed(1);
    var result = "";

    if (bmi <= 18.5) {
        result = "Underweight";
    } else if (bmi <= 24.9) {
        result = "Normal weight";
    } else if (bmi <= 29.9) {
        result = "Overweight";
    } else {
        result = "Obesity";
    }

    res.send("Your BMI is " + bmi + ": (" + result + ")");
});



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});