var fs = require('fs')

console.log('starting to read file');

// var contents = fs.readFileSync('./files/node.txt')
//console.log('' + contents)

fs.readFile('./files/node.txt', function(err, contents){
    console.log('' + contents)
})

console.log('finished reading file');
