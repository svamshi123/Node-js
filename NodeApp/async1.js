function add(a,b,cb){
    setTimeout(function(){
         cb(a+b);
    },5000);

}
function mul(a,b){
    return a*b;
}
add(100,200,function(res){
    console.log(res);
});
console.log(mul(100,200));