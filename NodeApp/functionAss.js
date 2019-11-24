function strlen(str){
    let  p = new Promise(function(resolve,reject){
        if(str.length ==0)
            reject('no String');
        else
            resolve(str.length);
    })
    return p; 
}
strlen('vamshi').then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});