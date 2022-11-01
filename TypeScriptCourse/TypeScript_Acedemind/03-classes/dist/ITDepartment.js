import { Department } from "./Department.js";
export class ITDepartment extends Department {
    constructor(id, admins) {
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
    describe() {
        console.log(`IT Department (${this.id}): ${this.name}`);
    }
}
//# sourceMappingURL=ITDepartment.js.map