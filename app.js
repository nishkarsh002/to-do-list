//jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: true})); 
app.use(express.static("public"));

app.get("/" , (req, res) =>{

    var today = new Date();

    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US",option);


    res.render("list" , {kindofday: day , newListItem: items});
});

app.post('/', (req,res)=>{
    var item = req.body.newItem;
    items.push(item);
    // console.log(item);

    res.redirect("/");
} )

app.listen(3000 , function(){
    console.log("server is running");
});