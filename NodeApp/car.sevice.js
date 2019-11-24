let car = require('./stores');
function AddCar(ca){
    car.cars.push(ca);
}
function findall(){
   console.log(car);
}
function findByName(code){
  for(let i=0;i<car.cars.length;i++){
      if(car.cars[i].code == code){
          return car.cars[i];
      }
  }
}
function removecar(code){
    for(let i=0;i<car.cars.length;i++){
        if(car.cars[i].code == code){
           car.cars.splice(i,1);
        }
    }
}
module.exports = {
    findall,findByName,removecar,AddCar
}
