//Read , write , append and delete. Module file system (fs)

let fs = require('fs');

// fs.readFile('mod1.js','utf8', function(err,data){

//     console.log(data);
// })

// fs.writeFile('dummy1.js', 'console.log(testwrite)', function(err){
//     console.log('new file data written');
// })

//  fs.writeFile('dummy.js', 'console.log(testwrite)', function(err){
//      console.log('data over written');
//  })

 fs.appendFile('dummy.js', 'console.log(testwrite)', function(err){
    console.log('data over written Prabhu');
})

fs.unlink('dummy1.js', function(err){

    console.log('file deleted....');
})