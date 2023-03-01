type Person = {
  name: string;
  age: number;
};

export const minBy = (
  array: unknown[],
  cb: (input: unknown) => number | string
) => {
  let minValue;
  let min;
  for (let element of array) {
    if (!minValue) {
      minValue = cb(element);
      min = element;
    }
    if (cb(element) < minValue) {
      minValue = cb(element);
      min = element;
    }
  }
  return min;
};

export function maxBy(
  array: unknown[],
  cb: (input: unknown) => number | string
) {
  let maxVal;
  let max;
  for (let element of array) {
    if (!maxVal) {
      maxVal = cb(element);
      max = element;
    }
    if (cb(element) > maxVal) {
      maxVal = cb(element);
      max = element;
    }
  }
  return max;
}
