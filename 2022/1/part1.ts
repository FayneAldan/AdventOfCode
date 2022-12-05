const input = Deno.readTextFileSync(
  new URL("input.txt", import.meta.url)
).replace(/\r/g, "");

const array = input //
  .split("\n\n")
  .map((v) => v.split("\n").map(Number))
  .map((v) => v.reduce((sum, n) => sum + n, 0))
  .sort((a, b) => b - a);
console.log(array[0]);
