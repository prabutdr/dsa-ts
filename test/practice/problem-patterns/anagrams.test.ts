import each from 'jest-each';
import { validAnagram } from '../../../src/practice/problem-patterns/anagrams';

describe('validAnagram', () => {
  each([
    ['', ''],
    ['1', '1'],
    ['anagram', 'nagaram'],
    ['qwerty', 'qeywrt'],
    ['texttwisttime', 'timetwisttext'],
  ]).test(
    '%j and %j are valid anagrams', 
    (word1: string, word2: string) => {
      expect(validAnagram(word1, word2)).toBe(true);
  });

  each([
    [' ', ''],
    ['aaz', 'zza'],
    ['rat', 'car'],
    ['awesome', 'awesom'],
  ]).test(
    '%j and %j are not a valid anagrams', 
    (word1: string, word2: string) => {
      expect(validAnagram(word1, word2)).toBe(false);
  });

});