// eslint-disable-next-line @typescript-eslint/no-use-before-define
export const deleteProperty = (key: string, { [key]: _, ...newObj }) => newObj;
