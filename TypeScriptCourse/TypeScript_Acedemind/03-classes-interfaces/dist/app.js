import { AccountingDepartment } from "./AccountingDepartment.js";
import { Department } from "./Department.js";
import { ITDepartment } from "./ITDepartment.js";
const accounting = new AccountingDepartment("d1", []);
accounting.addEmployee("Krystian");
accounting.addEmployee("Max");
accounting.describe();
accounting.name = "New name";
accounting.printEmployeeInformation();
console.log(typeof accounting);
const informationTech = ITDepartment.getInstance();
informationTech.describe();
console.log(informationTech);
const accountDepartment = new AccountingDepartment("d2", []);
accountDepartment.addReport("Something went wrong...");
accountDepartment.printReports();
accountDepartment.addEmployee("Krystian");
accountDepartment.addEmployee("Patrycja");
accountDepartment.printEmployeeInformation();
try {
    console.log(accountDepartment.mostRecentReport);
}
catch (error) {
    console.log("Error! Not exist any report.");
    throw error;
}
accountDepartment.mostRecentReport = "Year end report";
const employee = Department.createEmployee("employeer");
console.log(employee, Department.fiscalYear);
//# sourceMappingURL=app.js.map