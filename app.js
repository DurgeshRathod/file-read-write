


const fs = require('fs');
fs.readFile('inputFile.txt','utf-8',(err,buff)=>{
    if(err){
        console.log(err);
    }
    // console.log(buff);
    fs.writeFile('outputFile.txt',buff,(err)=>{
        if(err)
            console.log(err);
        console.log('file written success');
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream('outputFile.txt')
          });
          
          lineReader.on('line', function (line) {
            console.log('Line from file:', line);
          });
    });
});


