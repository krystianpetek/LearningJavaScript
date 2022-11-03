function PropDecorator(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function PropertyDescriptor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator");
  console.log(target, name, descriptor);
}

function MethodDecorator(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target, name, descriptor);
}

function ParameterDecorator(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log("Parameter decorator");
  console.log(target, name, position);
}

export default class Product {
  @PropDecorator
  title: string;
  private _price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  get price() {
    return this._price;
  }
  @PropertyDescriptor
  set price(value: number) {
    if (value <= 0) {
      throw new Error("Invalid price - should be positive!");
    }
    this._price = value;
  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator tax: number) {
    return this.price * (1 + tax);
  }
}
