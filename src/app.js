const express = require('express');
const router = require('./routers/men');
require("../src/db/connect")
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(router);

app.listen(port, ()=>{
    console.log(`connection in live at port no. ${port}`)
})

