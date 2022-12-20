require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT|| 5555
// process.env.PORT||
const db = require('./db/db')
const user = require('./routes/user')
const msg = require('./routes/message')
const cors = require('cors')
const http = require('http')
const socketio = require('socket.io')

app.use(express.json())
app.use(cors())
const server = http.createServer(app)
const io= socketio(server)
io.on('connection',(socket)=>{
    // console.log('connected sucess',socket.id)
    // socket.on('msgn',(msg)=>{
    //     console.log(msg)
    // })
})

app.use((req, res, next) => {
    try {
        req.io = io;
    return next();
    } catch (error) {
        console.log('err')
        
    }
    
  });
app.use(express.static('public'))
app.use("/user", user)
app.use("/item",msg)
app.get('/',(req,res)=>{
    res.send('hello from server side')
})


server.listen(port, () => {
    console.log(`server running at ${port}`)
   
})
// const io = require('socket.io')(http)
