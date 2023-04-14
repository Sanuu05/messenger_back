
const User = require("../models/user")
const Message = require('../models/message')



exports.post= async(req,res)=>{
    try {
        const { message} = req.body
        const postUser = await User.findById(req.user)
        console.log(postUser)
        postUser.password= undefined
        const msgres = new Message({
            message,
            postedBy:postUser
        })

        const msgsave = await msgres.save()
        res.json(msgsave)
        
    } catch (error) {
        console.log(error)
    }
}

exports.get=async(req,res)=>{
    try {
        const allmsg = await Message.find().populate("postedBy", "name")
        res.json(allmsg)
    } catch (error) {
        console.log(error)
    }
}

