export class Department {
    constructor(id, name) {
        this.id = id;
        this.employees = [];
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length, this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2020;
//# sourceMappingURL=Department.js.map