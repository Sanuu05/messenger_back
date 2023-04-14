const express = require('express')
const route = express.Router()
const auth = require('../middleware/auth')
const { post ,get} = require('../controller/message')

route.post("/post",auth,post )
route.get('/all',get)
module.exports= route