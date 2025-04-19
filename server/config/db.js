const mongoose = require('mongoose');



function dbconnect (){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("database is connected")
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports = dbconnect