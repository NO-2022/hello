const DataModel = require('../models/data.model');

// get all data list
exports.api_call_getalldata  = (req, res)=> {
    //console.log('here all data list');
    DataModel.GetAllData((err, data) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Data', data);
        res.send(data)
    })
}