const mongoose=require('mongoose');
const Schema=mongoose.Schema

const detailSchema=new Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    obj:{
        type:String,
        required:true
    },
    myfile:{
        type:String,
    },
    filename:{
        type:String,
        unique:true,
        required:true
        // required:true
    },
    contentType:{
        type:String,
        required:true
    },
    imageBase64:{
        type: String,
        required: true
    },
    yname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    socialink:{
        type:String,
        required:true
    },
    socialink1:{
        type:String,
        required:true
    },
    gname:{
        type:String,
    },
    // {{type:String}}
    technologies:[],
    apk_views:{
        type:String,
        default:null
    },
    vid1:{
        type:String,
        default:null
    },
    repolink:{
        type:String,
        required:true
    },
    weblink:{
        type:String
    },
    apkf:{
        type:String
    },
    

}, {
        timestamps:true
    }
)
var Projects=mongoose.model('Project',detailSchema);
module.exports=Projects;