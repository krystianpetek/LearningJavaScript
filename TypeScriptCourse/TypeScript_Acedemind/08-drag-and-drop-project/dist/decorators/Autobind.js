export function Autobind(_a, _b, descriptor) {
    return {
        ...descriptor.value,
        get() {
            return descriptor.value.bind(this);
        },
    };
}
//# sourceMappingURL=Autobind.js.map