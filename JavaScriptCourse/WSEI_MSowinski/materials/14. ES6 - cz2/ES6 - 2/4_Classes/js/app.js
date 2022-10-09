{
    console.log('preparation task')
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


{
    console.log('\ntask 01 and task 04');
    class Duck {
        constructor() {
            this.type = 'common duck';
        }
        quack() {
            console.log('quack quack');
        }
        swim() {
            console.log('i`m swimming...');
        }
        show() {
            console.log('looks like ' + this.type);
            this.fly();
        }
        fly() {
            console.log('i`m flying...');
        }
    }

    const duck = new Duck();
    duck.quack();
    duck.swim();
    duck.show();

    console.log('\ntask 02');
    class WildDuck extends Duck {
        constructor() {
            super();
            this.type = 'wild duck';
        }
    }
    const wildDuck = new WildDuck();
    wildDuck.quack();
    wildDuck.swim();
    wildDuck.show();

    console.log('\ntask 03');
    class CrossedDuck extends Duck {
        constructor() {
            super();
            this.type = 'crossed duck';
        }
    }
    const crossedDuck = new CrossedDuck();
    crossedDuck.quack();
    crossedDuck.swim();
    crossedDuck.show();

    console.log('\ntask 05');
    class GumDuck extends Duck {
        constructor() {
            super();
            this.type = 'gum duck';
            this.fly = () => console.log('gum duck doesn`t know how to fly');
        }
    }
    const gumDuck = new GumDuck();
    gumDuck.quack();
    gumDuck.swim();
    gumDuck.show();

}