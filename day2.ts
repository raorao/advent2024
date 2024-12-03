export function safeReports(str: string): boolean {
  const reports = str.split(" ").map(Number);
  let ascending: Boolean | null = null
  for (let i = 0; i < reports.length; i++) {
    if (i === 0) {
      continue
    }

    const cur = reports[i]
    const pre = reports[i - 1]

    if (ascending === null) {
      ascending = cur > pre
    }

    if (
      (ascending && cur < pre) ||
      (!ascending && cur > pre) ||
      (cur === pre) ||
      (Math.abs(cur - pre) > 3)
    ) {
      return false
    }
  }

    return true
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
