import Lengthy from "./Lengthy.js";

function merge<T, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

export { merge, countAndDescribe, extractAndConvert };
