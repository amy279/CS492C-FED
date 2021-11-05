const express = require('express');
const app = express();
const port = 4000;
const dbAddress = 'mongodb+srv://dain:1234@cluster0.hq96u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const {User} = require('./models/User');

const mongoose = require("mongoose")

mongoose
    .connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("MongoDB Connected"))
    .catch((err)=> console.log(err));

app.get('/', (req, res) => {
    res.send("hello world");
});

app.post('/register', (req,res) => {
    const user = new User(req.body);

    user.save((err,userInfo) => {
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        });
    });
});

app.listen(port, () => {
    console.log('서버가 가동중입니다. ${port}!');
});