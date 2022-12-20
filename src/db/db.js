const mongoose = require('mongoose');
const Pusher = require("pusher");
const pusher = new Pusher({
    appId: "1155491",
    key: "dd6db006f4dad11b7fe7",
    secret: "9ce9001fb9e00d7842e7",
    cluster: "ap2",
    useTLS: true
});

mongoose.connect(" mongodb+srv://sanz:sannu05@cluster0.s5xci.mongodb.net/messenger?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db connected")
}).catch(() => {
    console.log("db failed")
})
const db = mongoose.connection
db.once('open', () => {
    console.log('db coonected again')

    const msgCollection = db.collection('users');
    const changeStream = msgCollection.watch()
    changeStream.on('change', (change)=>{
        // console.log(change)
        if(change.operationType==='update'){
            const msgdetail = change.updateDescription;
            pusher.trigger('messages','inserted',{
                msg: msgdetail.updatedFields
            })

        }if(change.operationType==='insert'){
            const msgdetail = change.fullDocument;
            pusher.trigger('username','insertuser',{
                user:msgdetail.name
            })
        }
        else{ 
            console.log('error trigger')
        }
    })

})
