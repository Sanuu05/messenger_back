const express = require('express')
const route = express.Router()
const auth = require('../middleware/auth')
const { signUp, Login, getUser, editPic, newMsg, soc, delMsg, createGrp, addToGrp, online, offline, getUserMsgById, getUserById, getAllUser } = require('../controller/user')
route.post('/signup',signUp)
route.post('/login',Login)
route.get('/getuser',auth,getUser)
route.post('/editpic',auth,editPic)
route.post('/nmsg',auth,newMsg)
route.post('/soc',soc)
route.put('/delmsg',auth,delMsg)
route.post('/creategrp',createGrp)
route.post('/addtogrp',auth,addToGrp)
route.patch('/online', auth, online)
route.patch('/offline', auth,offline)
route.get('/oneuser/:id', auth,getUserMsgById)
route.get('/getuser/:id', auth,getUserById )
route.get('/getalluser',getAllUser)




module.exports= route