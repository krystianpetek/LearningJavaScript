function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got 1 element.`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return `Value ${obj[key]}`;
}
export { merge, countAndDescribe, extractAndConvert };
//# sourceMappingURL=genericsFunctions.js.map