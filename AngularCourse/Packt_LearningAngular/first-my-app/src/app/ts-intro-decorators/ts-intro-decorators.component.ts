import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-intro-decorators',
  templateUrl: './ts-intro-decorators.component.html',
  styleUrls: ['./ts-intro-decorators.component.css'],
})
export class TsIntroDecoratorsComponent {}

// class decorator (formal declarationn)
declare type ClassDecorator = <TFunction extends Function>(
  Target: TFunction
) => TFunction | void;

// example class decorator
function Banana(target: Function): void {
  target.prototype.banana = function (): void {
    console.log('We have bananas!');
  };
}

@Banana
class FruitBasket {}

const basket: any = new FruitBasket();
basket.banana();

// extending a class decorator
function BananaExtend(message: string) {
  return function (target: Function) {
    target.prototype.banana = function (): void {
      console.log(message);
    };
  };
}

@BananaExtend('Bananas are yellow!')
class FruitBasketExtend {}

const basketExtend: any = new FruitBasketExtend();
basketExtend.banana();

// // property decorators
// function Jedi(target: Object, key: string): void {
//   let propertyValue: string = target[key];
//   if (delete target[key as keyof object]) {
//     Object.defineProperty(target, key, {
//       get: function () {
//         return propertyValue;
//       },
//       set: function (newValue) {
//         propertyValue = newValue;
//         console.log(`${propertyValue} is a Jedi`);
//       },
//     });
//   }
// }

// class Character {
//   @Jedi
//   name: string;
// }
// const character = new Character();
// character.name = 'Luke';

// function NameChanger(callbackObject: any): Function {
//   return function (target: Object, key: string): void {
//     let propertyValue: string = target[key as keyof typeof target];
//     if (delete target[key as keyof typeof target]) {
//       Object.defineProperty(target, key, {
//         get: function () {
//           return propertyValue;
//         },
//         set: function (newValue) {
//           propertyValue = newValue;
//           callbackObject.changeName.call(this, propertyValue);
//         },
//       });
//     }
//   };
// }
