//Callbacks

function printFn(callback){
	console.log(callback)
	//ASYCH
	setTimeout(function(){
       console.log('In print fn function')
       callback("SUCCESS!!")
    },2000)
//     return "SUCCESS"
}

printFn(function(result){ console.log(result) } )

// ES6 Promises


function printFn(){
	console.log()
    //ASYCH
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('In print fn function')
            // callback("SUCCESS!!")
            resolve("SUCCESS!!");
         },2000)
    })
	
//     return "SUCCESS"
}

printFn()
.then(function(result){
    console.log(result)
    return "1"
})
.then(function(x){
    console.log(x)
})
.catch(function(result){
    console.log(result)
})





