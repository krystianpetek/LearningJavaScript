export abstract class Department {
  name: string;
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(public readonly id: string, name: string) {
    this.name = name;
    // we can initialize access modifier to property in constructor parameter
  }

  abstract describe(this: Department): void;

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length, this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}
