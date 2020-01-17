// const car = {
//     make: 'BMW',
//     model: '525i',
//     fuel: 'Petrol',
//     transmission: 'Manual',
//     engineCapacity: 2.5,
//     cylinderConfiguration: 'I6',
//     year: 2002,
//     registration: 'YC52 HKG'
// }

class car{
    constructor(make, model, fuel, transmission, engineCapacity, cylinderConfiguration, year, registration, taxed, insured){
        this._make = make;
        this._model = model;
        this._fuel = fuel;
        this._transmission = transmission;
        this._engineCapacity = engineCapacity;
        this._cylinderConfiguration = cylinderConfiguration;
        this._year = year;
        this._registration = registration;
        this._taxed = taxed;
        this._insured = insured;
    }
    
    get make(){
        return this._make;
    }

    get model(){
        return this._model;
    }

    get fuel(){
        return this._fuel;
    }

    get transmission(){
        return this._transmission;
    }

    get engineCapacity(){
        return this._engineCapacity;
    }

    get cylinderConfiguration(){
        return this._cylinderConfiguration;
    }

    get year(){
        return this._year;
    }

    get registration()
    {
        return this._registration;
    }

    get insured(){
        return this._insured;
    }

    get taxed(){
        return this._taxed;
    }

    changeTaxedStatus(bool){
        this._taxed = bool;
    }

    changeInsuredStatus(bool){
        this._insured = bool;
    }
}

const newCar = new car('BMW', '525i', 'Diesel', 'Automatic', 2.5, 'V6', 2004, 'AF04 JWD', true, false);

console.log(`%s, %s, %s, %s, %f, %s, %i, %s, %s, %s`, newCar.make, newCar.model, newCar.fuel, newCar.transmission, newCar.engineCapacity, newCar.cylinderConfiguration, newCar.year, newCar.registration, newCar.taxed, newCar.insured);
console.log(newCar.taxed);
newCar.changeTaxedStatus(false);
// newCar.taxed = false;
console.log(newCar.taxed);