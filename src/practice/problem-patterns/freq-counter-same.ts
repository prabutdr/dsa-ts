/**
 * Should return true if every value in the array has it's
 * corresponding value squared in the second array.
 * The frequency of values must be the same
 */
export function same(nums: number[], squaredNums: number[]): boolean {
  if (nums.length !== squaredNums.length) 
    return false;

  const frequency: ObjectMap<number> = {};
  for (const sn of squaredNums) {
    frequency[sn] = (frequency[sn] || 0) + 1;
  }

  for (const num of nums) {
    const sn = num ** 2;
    frequency[sn]--;

    if (frequency[sn] === -1) return false;
  }

  return true;
}

export function sameNaiveApproach(
  nums: number[],
  squaredNums: number[],
): boolean {
  if (nums.length !== squaredNums.length) return false;

  for (const num of nums) {
    const index = squaredNums.indexOf(num ** 2);

    if (index === -1) return false;

    squaredNums.splice(index, 1);
  }

  return true;
}
