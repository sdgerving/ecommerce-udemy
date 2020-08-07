const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require ('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require ('express-validator')
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const dotenv = require('dotenv');
const port = process.env.PORT || 8000;


//app
const app = express();

//db
mongoose.connect(
process.env.DATABASE,
{useNewUrlParser: true,
 useCreateIndex: true}
)
.then(()=>console.log('DB Connected'));
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use('/api', categoryRoutes);
//routes middleware
app.use("/api",authRoutes);
app.use("/api",userRoutes);
//routes




dotenv.config();




app.listen(port, () =>{
	console.log(`server is running on port ${port}`);
});
