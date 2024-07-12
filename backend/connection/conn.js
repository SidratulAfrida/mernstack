const mongoose = require("mongoose");
mongoose
 .connect("mongodb+srv://sidratulafrida31:UVLgQnZXVPNPDIZY@cluster0.xxnhxdg.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster0"   
  )
.then(() =>console.log("Connected"));
