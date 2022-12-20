const mongoose = require('mongoose')
const {ObjectId} = mongoose.Types

const groupSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profilePic:
    {
        type:String
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
            sent:Boolean,
            grpuser:{
                type:ObjectId,
                ref:"User"
            }

        }
    ]
})

const Group = mongoose.model("Group", groupSchema)
module.exports = Group