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
  console.log(sourceIndex, targetIndex);
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

  console.log(output);

  return output;
}
