import getInput from "../input.ts";
const input = getInput(import.meta.url);

const results = input //
  .split("\n\n")
  .map((v) => v.split("\n").map(Number))
  .map((v) => v.reduce((sum, n) => sum + n))
  .sort((a, b) => b - a);
console.log(results[0]);
console.log(results[0] + results[1] + results[2]);
