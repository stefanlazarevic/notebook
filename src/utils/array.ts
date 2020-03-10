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
  array: any[] = [],
  firstIndex: number,
  secondIndex: number
) {
  if (firstIndex < 0 || secondIndex < 0) {
    throw Error("Swap indexes must be greater than or equal to 0.");
  }

  if (firstIndex >= array.length || secondIndex >= array.length) {
    throw Error("Swap indexes must be less than the size of array.");
  }

  const swapped = Array(array.length);
  const first = array[secondIndex];
  const second = array[firstIndex];

  for (let i = 0; i < swapped.length; i++) {
    if (i === firstIndex) {
      swapped[i] = first;
    } else if (i === secondIndex) {
      swapped[i] = second;
    } else {
      swapped[i] = array[i];
    }
  }

  return swapped;
}
