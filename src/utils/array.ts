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
