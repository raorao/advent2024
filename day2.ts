export function safeReports(str: string): boolean {
  const reports = str.split(" ").map(Number);
  let ascending: boolean | null = null;
  let prev: number | null = null;

  for (const cur of reports) {
    if (prev === null) {
      prev = cur;
      continue;
    }

    if (ascending === null) {
      ascending = cur > prev;
    }

    if (
      (ascending && cur < prev) ||
      (!ascending && cur > prev) ||
      (cur === prev) ||
      (Math.abs(cur - prev) > 3)
    ) {
      return false;
    }

    prev = cur;
  }

  return true;
}

if (import.meta.main) {
  console.log("safeReports", safeReports("7 6 4 2 1"), "should be", true);
  console.log("safeReports", safeReports("1 2 7 8 9"), "should be", false);
  console.log("safeReports", safeReports("9 7 6 2 1"), "should be", false);
  console.log("safeReports", safeReports("1 3 2 4 5"), "should be", false);
  console.log("safeReports", safeReports("8 6 4 4 1"), "should be", false);
  console.log("safeReports", safeReports("1 3 6 7 9"), "should be", true);
  console.log("safeReports", safeReports("1 1 3 4 7"), "should be", false);
}
