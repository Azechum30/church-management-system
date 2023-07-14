require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


// Built-in express middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

// Import all routes
const memberRouter = require('./routes/members');
const db = require('./models');

// App custom middleware
app.use('/api/v1/members', memberRouter);


// configure server to listen on a specific port for incoming request;
db.sequelize.sync().then(()=>{
    app.listen( 5000, ()=>{
        console.log(`Server is running at http://localhost:${5000}`);
    })
}).catch(err=>{
    console.log(err);
})


