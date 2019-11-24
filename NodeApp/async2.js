function add(a,b,cb){
    setTimeout(function(){
        cb(a+b);
    },5000);
    
}
add(10,20,function(res){
    console.log(res);
});
console.log("Hello..............")