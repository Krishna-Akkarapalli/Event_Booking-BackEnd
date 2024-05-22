const mongoose = require("mongoose")

const concertsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true,
        unique:true

    },
    showtype:{
        type: String,
        required:true,
        unique:true
    },
    price:{
        type: String,
        required:true,
    },
    showname:{
        type: String,
        required:true,
        unique:true
    },
    artistimage:[
        {
            image: {
                type:String,
                // required:true,
                
            }
        

    }]
},{timestamps:true});

const Concert = mongoose.model("concert",concertsSchema)

module.exports = Concert;