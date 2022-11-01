import { Department } from "./Department.js";

export class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployee(name: string): void {
    if (name === "Krystian") return;
    this.employees.push(name);
  }

  describe(this: Department): void {
    console.log(`Accounting Department (${this.id}): ${this.name}`);
  }
}
