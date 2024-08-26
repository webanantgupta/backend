const express = require('express');
const app = express();
const port = 8080;
const connectTodb = require('./db');
connectTodb();
 
// imported User.js userSchema
const UserCollection = require('./models/User');

app.use(express.json());

app.get('/', (req,res) => {

    res.send('welcome to page');
})

app.post('/register', async(req,res) => {
    const {name,email,password} = req.body;
    try {
        let data = await UserCollection.create({
            name:name,
            email:email,
            password:password
        })
       return res.json({msg:'user register successfully', data, success:true})
    } catch (error) {
        res.json({msg : "error in creating user" , success: false, error:error.errmsg})
    }
})

app.listen(port, () => {
    console.log('server is running on ' + port);
    
})