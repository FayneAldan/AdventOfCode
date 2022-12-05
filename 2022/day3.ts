import _, { add } from "lodash";
import getInput from "../input.ts";
const input = getInput(import.meta.url);

const charCodes = {
  A: "A".charCodeAt(0),
  Z: "Z".charCodeAt(0),
  a: "a".charCodeAt(0),
  z: "z".charCodeAt(0),
};

export function toPriority(itemStr: string): number {
  const item = itemStr.charCodeAt(0);
  if (item >= charCodes.a && item <= charCodes.z) return item - charCodes.a + 1;
  else return item - charCodes.A + 27;
}

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

const part1 = input
  .split("\n")
  .map(toComps)
  .map(findCommon)
  .map(toPriority)
  .reduce(add);
console.log(part1);

function findGroupCommon(group: [string, string, string]): string {
  const [a, b, c] = group;
  for (const itemA of a.split(""))
    for (const itemB of b.split("")) //
      if (itemA == itemB)
        for (const itemC of c.split("")) //
          if (itemA == itemC) return itemA;
  throw new Error();
}

const part2 = _(input)
  .split("\n")
  .chunk(3)
  .map(findGroupCommon)
  .map(toPriority)
  .reduce(add);
console.log(part2);
