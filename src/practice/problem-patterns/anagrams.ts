
export function validAnagram(
  word1: string, 
  word2: string
): boolean {
  
  if (word1.length !== word2.length) 
   return false;

  const freq: ObjectMap<number> = {};

  for (const ch of word1)
    freq[ch] = (freq[ch] || 0) + 1;
  
  for (const ch of word2)
    if (freq[ch] === undefined || --freq[ch] < 0)
      return false;

  return true;
}