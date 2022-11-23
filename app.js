//start server 
// const express = require('express');
// const app = express();
// const port = 8000;
// app.get("/", (req,res)=>{
//     res.send("Home page");
// })
// app.listen(port ,()=>{
//     console.log(`App is listening on http://localhost:${port}`);
// })

const express = require('express');
const app = express();
const port = 8000;
require('./model')
app.get("/", (req,res)=>{
    res.send("Home page");
})
app.listen(port ,()=>{
    console.log(`App is listening on http://localhost:${port}`);
})

//Now sequalize connection