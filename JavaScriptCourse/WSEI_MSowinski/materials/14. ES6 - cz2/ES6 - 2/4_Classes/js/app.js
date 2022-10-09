{// Preparation
    class Vehicle {
        constructor(name) {
            this.name = name;
        }
        doAction(behavior) {
            console.log(behavior);
        }
    }

    class Boat extends Vehicle {
        constructor(name) {
            super(name);
        }
        boating() {
            super.doAction('Sail on a boat');
        }
    }

    class Car extends Vehicle {
        constructor(name) {
            super(name);
        }
        driving() {
            super.doAction('Drive a car');
        }
    }

    class Plane extends Vehicle {
        constructor(name) {
            super(name);
        }
        flying() {
            super.doAction('Fly by plane');
        }
    }

    const boat = new Boat().boating();
    const car = new Car().driving();
    const plane = new Plane().flying();
}
