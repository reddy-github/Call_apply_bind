
//bind


function Car(type,fuel){
    this.type=type;
    this.fuel=fuel;
}


function setBrand(brand){
    Car.bind(this,'convertible', 'ev')();
    this.brand=brand;
    console.log(this);
}

const Brand1=new setBrand('tata');



if(!Function.prototype.bind){
    Function.prototype.bind=function(thisArg){
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
    Car.bind(this,'convertible', 'ev')();
    this.brand=brand;
    console.log(this);
}

const Brand2=new setBrand('tata');