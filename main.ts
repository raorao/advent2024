export function mul(str: string): number {
  const mults = str.match(/mul\((\d+),(\d+)\)/g);
  let sum = 0;

  mults?.forEach((mult) => {
    const [_, a, b] = mult.match(/mul\((\d+),(\d+)\)/) as [any, string, string];
    sum += parseInt(a) * parseInt(b);
  });

  return sum;
}

if (import.meta.main) {
  console.log(
    "mul",
    mul(
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
    ),
  );
}
