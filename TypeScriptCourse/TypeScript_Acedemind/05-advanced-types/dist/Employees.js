function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ("privileges" in emp) {
        console.log(`privilates: ${emp.privileges}`);
    }
    if ("startDate" in emp) {
        console.log(`Start date: ${emp.startDate}`);
    }
}
export { printEmployeeInformation };
//# sourceMappingURL=Employees.js.map