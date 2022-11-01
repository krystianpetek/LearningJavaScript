import { Department } from "./Department.js";

export class ITDepartment extends Department {
  admins: string[];
  private static instance: ITDepartment;

  private constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance;
    }
    ITDepartment.instance = new ITDepartment("d2", ["Krystian"]);
    return ITDepartment.instance;
  }

  describe(this: Department): void {
    console.log(`IT Department (${this.id}): ${this.name}`);
  }
}
