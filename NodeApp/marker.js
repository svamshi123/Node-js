class Marker{
    constructor(make,color){
        this.make = make;
        this.color = color;
    }
    write(){
        console.log(this.color);
        console.log(this.make);
    }
}
let m  = new Marker('camlin','blue');
m.write();