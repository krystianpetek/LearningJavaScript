interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // e.g. [required], [positive]
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

export default class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

export function validate(object: any) {
  const objValidatorConfig = registeredValidators[object.constructor.name];
  if (!objValidatorConfig) return true;

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
