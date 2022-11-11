var dbConn  = require('../../config/db.config');

var Data = function (data) {
    this.data_id = data.data_id;
    this.content = data.content;
    this.date = data.date;
}

// get all employees
Data.GetAllData = (result) =>{
    dbConn.query('SELECT * FROM data WHERE data_id ORDER BY data_id', (err, res)=>{
        if(err){
            console.log('Error while fetching data', err);
            result(null,err);
        }else{
            console.log('data fetched successfully');
            result(null,res);
        }
    })
}

module.exports = Data;