class City {
}

const Warsaw = new City();
const NewYork = new City();

class CountryWithPopulation {
    constructor(name, capital, population) {
        this.name = name;
        this.capital = capital;
        this.population = population;
    }
}
const poland = new CountryWithPopulation('Polska', 'Warszawa', 38000000);

class Country {
    constructor(name) {
        this.name = name;
        this.showName = () => console.log(this.name);
        this.showCountryName = function () {
            return console.log(`Metoda w instacji wskazuje: ${this.name}`);
        };
    }

    showCountryName() {
        console.log(`Metoda w prototypie wskazuje: ${this.name}`);
    }
}

const Poland = new Country('Polska');
const Italy = new Country('Italia');

Poland.showCountryName();
Italy.showCountryName();
Poland.showName();
Italy.showName();

// dziedziczenie
class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Imię osoby to ${this.name}`);
    }
}

class Student extends Person {
    constructor(name = "", degrees = []) {
        super(name);
        this.degrees = degrees;
    }
    showDegrees() {
        const completed = this.degrees.filter(degree => degree > 2);
        console.log(`Student ${this.name} ma stopnie: ${this.degrees} i zakończył już ${completed.length} przedmiotów.`);
    }
}

const Janek = new Student('Janek', [2, 3, 4, 5, 2, 3]);
Janek.showDegrees();