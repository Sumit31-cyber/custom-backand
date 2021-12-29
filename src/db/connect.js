const mongoose = require('mongoose');
DB = 'mongodb://localhost:27017/olympics',
mongoose.connect(DB, {

    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected...")
}).catch((e)=>{
    console.log(e.message)
})