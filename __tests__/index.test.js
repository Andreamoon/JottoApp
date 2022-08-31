import { getLetterMatchCount } from "../src/helpers";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("return correct count where there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);

    expect(letterMatchCount).toBe(0);
  });
  test("returns the correct count where there are matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test("return the correct count when there are duplicate letters in the guess", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);


  });
});
