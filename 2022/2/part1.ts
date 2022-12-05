import { toHand, calcScore } from "./common.ts";
import { add } from "lodash";

const input = Deno.readTextFileSync(new URL("input.txt", import.meta.url))
  .replace(/\r/g, "")
  .trim();

const results = input
  .split("\n")
  .map((v) => v.split(" ").map(toHand))
  .map((v) => calcScore(v[1], v[0]))
  .reduce(add);
console.log(results);
