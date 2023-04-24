
//apply


function Car(type,fuelType) {
    this.type=type;
    this.fuelType=fuelType;
}

function setBrand(brand) {
    Car.apply(this,["convertible", "petrol"]);
    this.brand=brand;
    console.log(this);

}



const Brand1=new setBrand('Vw');


if(!Function.prototype.apply){
    Function.prototype.apply=function (thisArg,argsArray){

        var fn=this;
        var context=thisArg || window;
        context.fn=fn;
        var result;
        if(argsArray){
            result=context.fn(...argsArray);
        }
            else{
                result=context.fn();

            }
    }
    delete fn;
    return result;
}

function Car(type,fuelType) {
    this.type=type;
    this.fuelType=fuelType;
}

function setBrand(brand) {
    Car.apply(this,["convertible", "petrol"]);
    this.brand=brand;
    console.log(this);

}



const Brand=new setBrand('Vw');
