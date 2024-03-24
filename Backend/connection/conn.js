const mongoose = require("mongoose");
mongoose.connect("MongoDB URL").then(
   () => console.log("Connected")
);
