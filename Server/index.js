const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

env.config();

app.use(express.json());
app.use('/api', userRoutes);
// app.use(bodyParser());


app.get('/', (req, res, next) =>{
    res.status(200).json({
        msg: 'Hello'
    });
});

//connect to mongoose
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {

useCreateIndex: true,
useFindAndModify: false,
useNewUrlParser: true, 
useUnifiedTopology: true,
}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});


app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
});