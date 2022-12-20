const express = require("express")
const route = express.Router()
const User = require("../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const Message = require('../models/message')




route.post("/post",auth, async(req,res)=>{
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
})
route.get('/all', async(req,res)=>{
    try {
        const allmsg = await Message.find().populate("postedBy", "name")
        res.json(allmsg)
    } catch (error) {
        console.log(error)
    }
})

module.exports= route