type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`privilates: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start date: ${emp.startDate}`);
  }
}

export { printEmployeeInformation, UnknownEmployee, ElevatedEmployee };
