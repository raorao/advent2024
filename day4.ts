enum Direction {
  North = "N",
  South = "S",
  East = "E",
  West = "W",
  NorthEast = "NE",
  NorthWest = "NW",
  SouthEast = "SE",
  SouthWest = "SW",
}

export function findXMAS(str: string): number {
  let count = 0;
  const reports = str.split("\n").map((report) => report.split(""));

  for (let i = 0; i < reports.length; i++) {
    for (let j = 0; j < reports[i].length; j++) {
        count += check(i, j, reports, "X", Direction.NorthWest) +
          check(i, j, reports, "X", Direction.West) +
          check(i, j, reports, "X", Direction.SouthWest) +
          check(i, j, reports, "X", Direction.North) +
          check(i, j, reports, "X", Direction.South) +
          check(i, j, reports, "X", Direction.NorthEast) +
          check(i, j, reports, "X", Direction.East) +
          check(i, j, reports, "X", Direction.SouthEast);
    }
  }

  return count;
}

function check(
  i: number,
  j: number,
  reports: string[][],
  letter: string,
  direction: Direction,
): number {
  if (i < 0 || j < 0 || i >= reports.length || j >= reports[i].length) {
    return 0;
  }
  let nextLetter;
  switch (letter) {
    case "X":
      nextLetter = "M";
      break;
    case "M":
      nextLetter = "A";
      break;
    case "A":
      nextLetter = "S";
      break;
    case "S":
      break;
    default:
      throw new Error("Invalid letter");
  }

  if (reports[i] && reports[i][j] === letter) {
    if (!nextLetter) {
      return 1;
    }
    switch (direction) {
      case Direction.North:
        return check(i - 1, j, reports, nextLetter, direction);
      case Direction.South:
        return check(i + 1, j, reports, nextLetter, direction);
      case Direction.East:
        return check(i, j + 1, reports, nextLetter, direction);
      case Direction.West:
        return check(i, j - 1, reports, nextLetter, direction);
      case Direction.NorthEast:
        return check(i - 1, j + 1, reports, nextLetter, direction);
      case Direction.NorthWest:
        return check(i - 1, j - 1, reports, nextLetter, direction);
      case Direction.SouthEast:
        return check(i + 1, j + 1, reports, nextLetter, direction);
      case Direction.SouthWest:
        return check(i + 1, j - 1, reports, nextLetter, direction);
      default:
        throw new Error("Invalid direction");
    }
  }
  return 0;
}

if (import.meta.main) {
  console.log(
    "safeReports",
    findXMAS(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`),
    "should be",
    18,
  );
}
