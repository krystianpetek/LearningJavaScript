import _ from "lodash";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { Product } from "./Product";
import { validate } from "class-validator";

console.log(_.shuffle([1, 2, 3]));

declare let GLOBAL: string;
console.log(GLOBAL);

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

let loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});
// OR
loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
