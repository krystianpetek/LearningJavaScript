function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void return type
function voidResult(num: number): void {
  console.log(`Result: ${num}`);
}

// undefined return type
function printResult(num: number): undefined {
  console.log(`Result: ${num}`);
  return;
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // function type
combineValues = add;
console.log(combineValues(8, 8));

function addAndHandle(
  n1: number,
  n2: number,
  callback: (num: number) => string
): string {
  const result = n1 + n2;

  return callback(result);
}
const addAndHandleResult = addAndHandle(10, 20, (result: number): string => {
  return `callback function result: ${result}`;
});
console.log(addAndHandleResult);
