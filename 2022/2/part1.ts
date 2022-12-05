import { toHand, calcScore } from "./rps.ts";

const input = Deno.readTextFileSync(new URL("input.txt", import.meta.url))
  .replace(/\r/g, "")
  .trim();

const results = input
  .split("\n")
  .map((v) => v.split(" ").map(toHand))
  .map((v) => calcScore(v[1], v[0]))
  .reduce((sum, n) => sum + n);
console.log(results);
