export function Autobind(_a: any, _b: string, descriptor: PropertyDescriptor) {
  return {
    ...descriptor.value,
    get() {
      return descriptor.value.bind(this);
    },
  };
}
