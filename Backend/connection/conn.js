const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://devkumargajjar2001:Dev1234@cluster0.znrsqao.mongodb.net/BookStore?retryWrites=true&w=majority&appName=Cluster0").then(
   () => console.log("Connected")
);