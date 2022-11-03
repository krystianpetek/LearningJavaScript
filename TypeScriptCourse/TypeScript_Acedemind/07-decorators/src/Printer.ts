export default class Printer {
  message = "Autobinded this!";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

function Autobind(_a: any, _b: string, descriptor: PropertyDescriptor) {
  return {
    ...descriptor.value,
    get() {
      return descriptor.value.bind(this);
    },
  };
}
