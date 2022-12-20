const mongoose = require('mongoose')
const {ObjectId} = mongoose.Types

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    profilePic:
    {
        type:String
    },
    online:{
        type:Boolean,
        default:false

    },
    user:{
        type:Boolean

    },
    msg:[
        {
            text:String,
            user:{
                type:ObjectId,
                ref:"User"
            },
            pic:String,
            sent:Boolean

        }
    ]
})

const User = mongoose.model("User", userSchema)
module.exports = User