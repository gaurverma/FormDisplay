const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 4040;
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

const db  = "mongodb+srv://vermagaur:Dev567@cluster0.uzvy3.mongodb.net/nodejsintern?retryWrites=true&w=majority";
mongoose.connect(db, { 
        useUnifiedTopology: true,
        useNewUrlParser:true,
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const UserSchema = {
    fname:String, 
    lname:String,
    contact:Number,
    email:String,
    address:String,
    userid:String,
    passwrd: String
}

const Usermodel = mongoose.model('registers',UserSchema);

app.get('/', (req, res) => {
    Usermodel.find({}, function(err, registers) {
        res.render('index', {
            usersList: registers
        })
    })
})

app.listen(port, function() {
    console.log('server is running');
})