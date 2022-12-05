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
