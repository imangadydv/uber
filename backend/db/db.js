const mongoose = require("mongoose");

const connectdb = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(
        ()=>{
            console.log("connected to database");
        }
    )
    .catch(()=>{
        console.log("error connecting to database");
    })
}

module.exports=connectdb;