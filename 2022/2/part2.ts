import { toHand, calcScore, Hand, Outcome, calcOutcome } from "./common.ts";
import { add } from "lodash";

const input = Deno.readTextFileSync(new URL("input.txt", import.meta.url))
  .replace(/\r/g, "")
  .trim();

export function toOutcome(input: string): Outcome {
  switch (input) {
    case "X":
      return Outcome.Lose;
    case "Y":
      return Outcome.Draw;
    case "Z":
      return Outcome.Win;
  }
  throw new Error();
}

function calcHandNeeded(outcome: Outcome, them: Hand): Hand {
  if (calcOutcome(Hand.Rock, them) == outcome) return Hand.Rock;
  else if (calcOutcome(Hand.Paper, them) == outcome) return Hand.Paper;
  else return Hand.Scissors;
}

const results = input
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => <[Hand, Outcome]>[toHand(v[0]), toOutcome(v[1])])
  .map((v) => calcScore(calcHandNeeded(v[1], v[0]), v[0]))
  .reduce(add);
console.log(results);
