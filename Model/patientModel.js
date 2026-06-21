const mongoose  = require('mongoose');
const patientSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        unique:true
    },
    number:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    bloodgrp:{
        type:String
        // required:true
    },
    age:{
        type:String,
        trim:true,
        required:true
    },
    altnumber:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true,
        // required:true
    },
    status:{
        type:String,
        default:"u"
    }

},{
    timestamps:true
});

const patientModel = mongoose.model('patient',patientSchema);
module.exports = patientModel;
