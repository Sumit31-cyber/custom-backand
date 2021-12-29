const mongoose = require('mongoose');
const DB = 'mongodb+srv://sumit:sumit@cluster0.9ftji.mongodb.net/olympics?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected...")
}).catch((e)=>{
    console.log(e.message)
})