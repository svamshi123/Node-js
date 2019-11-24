const fs = require('fs');
fs.readFile('message.txt',function(err,data){
    if(err)
        return console.log('error opening the file');
    console.log(data.toString());
});