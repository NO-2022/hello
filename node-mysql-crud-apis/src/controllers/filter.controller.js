const DataModel = require('../models/data.model');

// get all data list
exports.api_call_filter  = (req, res)=> {
    //console.log('here all data list');
    DataModel.GetAllData((err, data) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Data', data[0].data_id);
        var newdata = {
            NewID:data[0].data_id,
            Part:data[0].content,
            Data_register:data[0].date
        };
        // console.log(data);
        res.send(newdata);
    })
}