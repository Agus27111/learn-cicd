import { isAnagram } from "../src/anagram";

describe("Checking string anagrams", () => {
  it("Should return true if two strings are anagrams", () => {
    const str1 = "anagram";
    const str2 = "nagaram";
    expect(isAnagram(str1, str2)).toBe(true);
  });
  it("Should return false if two strings are not anagrams", () => {
    const str1 = "rat";
    const str2 = "car";
    expect(isAnagram(str1, str2)).toBe(false);
  });
});
