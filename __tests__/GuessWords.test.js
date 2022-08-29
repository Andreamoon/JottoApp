import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkProps } from "../testUtils";
import GuessedWords from "../src/GuessedWords";
import { configEnzyme } from "../src/setupTests";

configEnzyme();
const defaulProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * @function setup
 * @param {object
 * } props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setuProps = { ...defaulProps, ...props };

  return shallow(<GuessedWords {...setuProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaulProps);
});

/**
 * group test
 */

describe(" if there are no guessed words", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  // il componente viene renderizzato senza errori
  test("render withouht error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-word");
    expect(component.length).toBe(1);
  });

  // vedi se le instruzioni vengono renderizzate
  test("render instructions to guess word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe(" if there are words guessed", () => {});
