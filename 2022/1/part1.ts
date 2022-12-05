const input = Deno.readTextFileSync(new URL("input.txt", import.meta.url))
  .replace(/\r/g, "")
  .trim();

const array = input //
  .split("\n\n")
  .map((v) => v.split("\n").map(Number))
  .map((v) => v.reduce((sum, n) => sum + n))
  .sort((a, b) => b - a);
console.log(array[0]);
