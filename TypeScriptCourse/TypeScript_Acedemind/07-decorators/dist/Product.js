var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function PropDecorator(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function PropertyDescriptor(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target, name, descriptor);
}
function MethodDecorator(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target, name, descriptor);
}
function ParameterDecorator(target, name, position) {
    console.log("Parameter decorator");
    console.log(target, name, position);
}
export default class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value <= 0) {
            throw new Error("Invalid price - should be positive!");
        }
        this._price = value;
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    PropDecorator
], Product.prototype, "title", void 0);
__decorate([
    PropertyDescriptor
], Product.prototype, "price", null);
__decorate([
    MethodDecorator,
    __param(0, ParameterDecorator)
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=Product.js.map