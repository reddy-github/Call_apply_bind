
// call in js
/*function Car(type,fuelType){
    this.type=type;
    this.fuelType=fuelType;
}


function setBrand(brand){
    Car.call(this,'convertable','petrol');
    this.brand=brand;
    console.log(this)
}

const Brand=new setBrand('volvo');

*/


if(!Function.prototype.call){
    Function.prototype.call=function(thisArg){
        var fn=this;
        var arg=Array.prototype.call.slice(arguments,1);
        context=thisArg || window;
        context.fn=fn;
        var result=context.fn(...args);
        
        delete context.fn;
        return result;
    }
}



function Car(type,fuel){
    this.type=type;
    this.fuel=fuel;
}



function setBrand(brand){
    Car.call(this,'convertable','diesel');
    this.brand=brand;
    console.log(this);
}
const Brand=setBrand('bmw')