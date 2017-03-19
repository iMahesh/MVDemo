var express     =require("express");
var app         =express();
var User        =require("./models/user");
var indexRoutes=require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.use("/",indexRoutes);


app.listen(3000,function(err){
    if(err){
        console.log("SERVER COUDN'T START "+err);
    }else{
        console.log("SERVER HAS STARTED....");
    }
});
