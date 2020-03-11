type MapCallbackFunction = (element: any, index: number, array: any[]) => void;

export function first(array: any[] = []): any {
  if (!array || array.length <= 0) {
    return undefined;
  }

  return array[0];
}

export function last(array: any[] = []): any {
  if (!array || array.length <= 0) {
    return undefined;
  }

  return array[array.length - 1];
}

export function chunk(array: any[] = [], size: number) {
  if (size < 1) {
    throw Error("Chunk size must be greater than one.");
  }

  // const result = Array(, () => []);
  const result: any[][] = Array.from(
    { length: Math.ceil(array.length / size) },
    () => []
  );
  let index = 0;

  for (let i = 0; i < result.length; i++) {
    const chunk = result[i];

    for (let j = 0; j < size; j++) {
      if (typeof array[index] !== "undefined") {
        chunk.push(array[index++]);
      }
    }
  }

  return result;
}

export function swap(
  sourceIndex: number,
  targetIndex: number,
  array: any[] = []
) {
  if (sourceIndex < 0 || targetIndex < 0) {
    throw Error("Swap indexes must be greater than or equal to 0.");
  }

  if (sourceIndex >= array.length || targetIndex >= array.length) {
    throw Error("Swap indexes must be less than the size of array.");
  }

  const output = Array(array.length);

  const source = array[targetIndex];
  const target = array[sourceIndex];

  for (let i = 0; i < array.length; i++) {
    if (i === sourceIndex) {
      output[i] = source;
      continue;
    }

    if (i === targetIndex) {
      output[i] = target;
      continue;
    }

    output[i] = array[i];
  }

  return output;
}

export function mapReversed(callback: MapCallbackFunction, array: any = []) {
  const output = Array(array.length);

  for (let i = array.length - 1; i > -1; i--) {
    output[array.length - i - 1] = callback(array[i], i, array);
  }

  return output;
}

export function map(callback: MapCallbackFunction, array: any = []) {
  const output = Array(array.length);

  for (let i = 0; i < array.length; i++) {
    output[i] = callback(array[i], i, array);
  }

  return output;
}
