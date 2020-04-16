/**
 * Should return true if every value in the array has it's
 * corresponding value squared in the second array.
 * The frequency of values must be the same
 * 
 * @param nums 
 * @param squaredNums 
 */
export function same(nums: number[], squaredNums: number[]): boolean {
  if (nums.length !== squaredNums.length)
    return false;
    
  const map = new Map<number, number>();

  for (let num of nums) {
    const freq = map.get(num);
    map.set(num, freq === undefined? 1 : freq + 1);
  }

  for (let squaredNum of squaredNums) {
    const num = Math.sqrt(squaredNum);
    const freq = map.get(num);
    if (freq === undefined || freq <= 0)
      return false;
    else
      map.set(num, freq - 1);
  }

  return [...map.values()].every(freq => freq == 0);
}