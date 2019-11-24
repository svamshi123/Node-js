// function add(a,b){
//     let p  = new Promise(function(resolve,reject){
//         if(a<0 || b<0){
//             reject('Invalid Nos....');
//         }else{
//             resolve(a+b);
//         }
//     });
//     return p;
// }
// add(10,20).then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// });
// console.log('Hello...........')

async function add(a,b){
    if(a<0||b<0)
        throw new Error("Invalid No....");
    return a + b;
}
async function test(){
    try{
        let res = await add(-10,20);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
test();