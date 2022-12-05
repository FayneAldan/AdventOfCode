import { add } from "lodash";
import getInput from "../input.ts";
const input = getInput(import.meta.url);

export enum Hand {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

export enum Outcome {
  Lose = 0,
  Draw = 3,
  Win = 6,
}

export function toHand(input: string): Hand {
  switch (input) {
    case "A":
    case "X":
      return Hand.Rock;
    case "B":
    case "Y":
      return Hand.Paper;
    case "C":
    case "Z":
      return Hand.Scissors;
  }
  throw new Error();
}

export function calcOutcome(you: Hand, them: Hand): Outcome {
  if (
    // Possible winning combinations
    (you == Hand.Rock && them == Hand.Scissors) ||
    (you == Hand.Paper && them == Hand.Rock) ||
    (you == Hand.Scissors && them == Hand.Paper)
  )
    return Outcome.Win;
  else if (you == them) return Outcome.Draw;
  else return Outcome.Lose;
}

export function calcScore(you: Hand, them: Hand): number {
  return you + calcOutcome(you, them);
}

const part1 = input
  .split("\n")
  .map((v) => v.split(" ").map(toHand))
  .map((v) => calcScore(v[1], v[0]))
  .reduce(add);
console.log(part1);

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

const part2 = input
  .split("\n")
  .map((v) => v.split(" "))
  .map((v) => <[Hand, Outcome]>[toHand(v[0]), toOutcome(v[1])])
  .map((v) => calcScore(calcHandNeeded(v[1], v[0]), v[0]))
  .reduce(add);
console.log(part2);
