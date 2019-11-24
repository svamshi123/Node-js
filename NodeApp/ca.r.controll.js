let carser  = require('./car.sevice');

 carser.AddCar({code:'3', make:'Matuti', model:'Ciaz', Variant:'Sports'});
 carser.findall();
 console.log(carser.findByName('1'))
 carser.removecar('1');
 carser.findall();