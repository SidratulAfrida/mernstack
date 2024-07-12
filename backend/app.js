const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes");
require("./connection/conn");
app.use(express.json());
app.use("/api/v1", bookRoute);
//(req,res) =>{
   // res.send("Hello");
//});

//app.get("/sevices",(req,res)=>{
   // res.send("sevices page");
//});

//app.get("/about",(req,res)=>{
//    res.send("about page");
//});

app.listen(1000, () =>{
   console.log("Server Started Successfully");
});
