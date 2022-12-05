import _, { add, chunk } from "lodash";
import { toPriority } from "./common.ts";

const input = Deno.readTextFileSync(new URL("input.txt", import.meta.url))
  .replace(/\r/g, "")
  .trim();

function findCommon(group: [string, string, string]): string {
  const [a, b, c] = group;
  for (const itemA of a.split(""))
    for (const itemB of b.split("")) //
      if (itemA == itemB)
        for (const itemC of c.split("")) //
          if (itemA == itemC) return itemA;
  throw new Error();
}

const results = _(input)
  .split("\n")
  .chunk(3)
  .map(findCommon)
  .map(toPriority)
  .reduce(add);
console.log(results);
