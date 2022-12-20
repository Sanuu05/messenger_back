const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types
const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
    
    timestamp:{ type: Date, default: Date.now }
})
const message = mongoose.model('message', messageSchema)
module.exports=message;