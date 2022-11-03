var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [
            ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
            "required",
        ],
    };
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [
            ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
            "positive",
        ],
    };
}
export default class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
export function validate(object) {
    const objValidatorConfig = registeredValidators[object.constructor.name];
    if (!objValidatorConfig)
        return true;
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!object[prop];
                    break;
                case "positive":
                    isValid = isValid && object[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
//# sourceMappingURL=Course.js.map