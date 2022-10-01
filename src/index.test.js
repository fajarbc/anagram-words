const { isAnagram, arePalindrome, findPattern } = require("./index");

describe("findPattern function test", () => {
  test("Default option", () => {
    const received = findPattern("car", "race car care");
    const expected = ["rac", "car", "arc", "rca", "car"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true", () => {
    const received = findPattern("cAr", "race car cAre", { caseSensitive: true });
    const expected = ["rcA", "cAr"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true", () => {
    const received = findPattern("car", "race car care", { space: true });
    const expected = ["rac", "car", "car"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: unique is true", () => {
    const received = findPattern("car", "race car care", { unique: true });
    const expected = ["rac", "car", "arc", "rca"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true", () => {
    const received = findPattern("cAr", "race car cAre", {
      caseSensitive: true,
      space: true,
    });
    const expected = ["cAr"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, unique is true", () => {
    const received = findPattern("cAr", "rAce car cAre", {
      caseSensitive: true,
      unique: true,
    });
    const expected = ["rAc", "rcA", "cAr"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true, unique is true", () => {
    const received = findPattern("car", "race car care", {
      space: true,
      unique: true,
    });
    const expected = ["rac", "car"];
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true, unique is true", () => {
    const received = findPattern("Car", "raCe caR care caR", {
      caseSensitive: true,
      space: true,
      unique: true,
    });
    const expected = ["raC"];
    expect(received).toStrictEqual(expected);
  });
});
describe("isAnagram function test", () => {
  test("Deafult option #1 : odd", () => {
    const received = isAnagram("Race car");
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Deafult option #2 : even", () => {
    const received = isAnagram("Race Ecar");
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Deafult option #2 : false", () => {
    const received = isAnagram("mything", "My night");
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true", () => {
    const received = isAnagram("Racecar", { caseSensitive: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true", () => {
    const received = isAnagram("race car", { space: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #1 : true", () => {
    const received = isAnagram("Rac e caR", {
      caseSensitive: true,
      space: true,
    });
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #2 : false", () => {
    const received = isAnagram("Mything", "My night", {
      caseSensitive: true,
      space: true,
    });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #3", () => {
    const received = isAnagram("my thing", "My night", {
      caseSensitive: true,
      space: true,
    });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
});
describe("arePalindrome function test", () => {
  test("Deafult option", () => {
    const received = arePalindrome("mything", "My night");
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true", () => {
    const received = arePalindrome("Thing", "Night", { caseSensitive: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: space is true", () => {
    const received = arePalindrome("mything", "My night", { space: true });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #1", () => {
    const received = arePalindrome("My thing", "My night", {
      caseSensitive: true,
      space: true,
    });
    const expected = true;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #2", () => {
    const received = arePalindrome("Mything", "My night", {
      caseSensitive: true,
      space: true,
    });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
  test("Option: caseSensitive is true, space is true #3", () => {
    const received = arePalindrome("my thing", "My night", {
      caseSensitive: true,
      space: true,
    });
    const expected = false;
    expect(received).toStrictEqual(expected);
  });
});
