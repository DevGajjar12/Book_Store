const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("./connection/conn")
app.use(express.json());
const bookRoute = require("./routes/booksRoutes");




app.use("/api/v1",bookRoute);



app.listen(4000,() => {
    console.log("Server Started");
});