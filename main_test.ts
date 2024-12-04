import { assertEquals } from "@std/assert";
import { safeReports } from "./day2.ts";
import { mul } from "./day3.ts";

Deno.test(function day2() {
  assertEquals(safeReports("7 6 4 2 1"), true);
  assertEquals(safeReports("1 2 7 8 9"), false);
  assertEquals(safeReports("9 7 6 2 1"), false);
  assertEquals(safeReports("1 3 2 4 5"), false);
  assertEquals(safeReports("8 6 4 4 1"), false);
  assertEquals(safeReports("1 3 6 7 9"), true);
  assertEquals(safeReports("1 1 3 4 7"), false);
});

Deno.test(function day3() {
  assertEquals(
    mul(
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
    ),
    161,
  );
});
