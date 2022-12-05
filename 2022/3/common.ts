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
