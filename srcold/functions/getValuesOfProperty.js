export function getValuesOfProperty(arr, propertyName) {
  return arr.map(item => item[propertyName]);
}