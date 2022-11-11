const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import employee routes
const employeeRoutes = require('./src/routes/employee.route');
const DataController = require('./src/routes/data.route');
const DatafilterController = require('./src/routes/filter.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);

// create data routes
app.use('/api/v2/data', DataController);

// create data routes
app.use('/api/v2/fillter', DatafilterController);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});