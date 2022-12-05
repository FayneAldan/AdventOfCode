import { add } from "lodash";
import { toPriority } from "./common";

const input = Deno.readTextFileSync(new URL("input.txt", import.meta.url))
  .replace(/\r/g, "")
  .trim();

function toComps(sack: string): [string, string] {
  const half = sack.length / 2;
  return [sack.substring(0, half), sack.substring(half)];
}

function findCommon(sack: [string, string]): string {
  const [a, b] = sack;
  for (const itemA of a.split(""))
    for (const itemB of b.split("")) //
      if (itemA == itemB) return itemA;
  throw new Error();
}

const results = input
  .split("\n")
  .map(toComps)
  .map(findCommon)
  .map(toPriority)
  .reduce(add);
console.log(results);
