const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("async task is complete");
        
    },1000)
});

promiseOne.then()