const express = require('express');
const app = express();
const port = 8080;
const connectTodb = require('./db');
connectTodb();
 

//all routers imported here
let userRoutes = require('./routes/userRoute');

// middleware
app.use(express.json());

app.get('/', (req,res) => {

    res.send('welcome to page');
})

app.use('/users', userRoutes)



app.listen(port, () => {
    console.log('server is running on ' + port);
    
})