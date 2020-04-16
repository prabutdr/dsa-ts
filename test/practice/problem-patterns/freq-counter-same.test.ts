import each from 'jest-each';
import {
  same,
  sameNaiveApproach,
} from '../../../src/practice/problem-patterns/freq-counter-same';

describe('same', () => {
  each([
    [
      [1, 2, 3],
      [4, 1, 9],
    ],
    [[1], [1]],
    [[], []],
  ]).test(
    'should be same for %j and %j',
    (nums: number[], squaredNums: number[]) => {
      expect(same(nums, squaredNums)).toBe(true);
    },
  );

  each([
    [
      [1, 2, 3],
      [1, 9],
    ],
    [
      [1, 2, 3],
      [1, 4, 9, 10],
    ],
    [[1, 2, 3], [1]],
    [
      [1, 2, 1],
      [4, 4, 1],
    ],
  ]).test(
    'should not be same for %j and %j',
    (nums: number[], squaredNums: number[]) => {
      expect(same(nums, squaredNums)).toBe(false);
    },
  );
});

describe('sameNaiveApproach', () => {
  each([
    [
      [1, 2, 3],
      [4, 1, 9],
    ],
    [[1], [1]],
    [[], []],
  ]).test(
    'should be same for %j and %j',
    (nums: number[], squaredNums: number[]) => {
      expect(sameNaiveApproach(nums, squaredNums)).toBe(true);
    },
  );

  each([
    [
      [1, 2, 3],
      [1, 9],
    ],
    [
      [1, 2, 3],
      [1, 4, 9, 10],
    ],
    [[1, 2, 3], [1]],
    [
      [1, 2, 1],
      [4, 4, 1],
    ],
  ]).test(
    'should not be same for %j and %j',
    (nums: number[], squaredNums: number[]) => {
      expect(sameNaiveApproach(nums, squaredNums)).toBe(false);
    },
  );
});
