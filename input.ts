import { basename, extname } from "std/path/mod.ts";

export default function getInput(url: string) {
  const base = basename(url, extname(url));
  return Deno.readTextFileSync(new URL(`${base}.txt`, url))
    .replace(/\r/g, "")
    .trim();
}
