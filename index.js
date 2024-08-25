const express = require ('express');
const app = express();

require ('dotenv').config();
const PORT = process.env.PORT || 5000;

//parsing
app.use(express.json());


//mount
const todoRoutes = require("./routes/todo");
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,(req,res)=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect the db
const dbConnect = require("./config/database");
dbConnect();

//default

app.get('/',(req,res)=>{
    res.send(`<h1>This is home page</h1>`)
})