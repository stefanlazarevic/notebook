export function generateRandom(length: number = 16): string {
  let output = "";

  if (length <= 0) {
    return output;
  }

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (output.length < length) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    output += characters.charAt(randomIndex);
  }

  return output;
}
