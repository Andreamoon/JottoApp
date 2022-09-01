import "jsdom-global/register"; //at the top of file, even before importing React

import React from "react";
import { mount } from "enzyme";
import { App } from "../src/App";

import { findByTestAttr, checkProps } from "../testUtils";
import { configEnzyme } from "../src/setupTests";

configEnzyme();

/**
 * Create a wrapper with specified inital conditions,
 * then submit a guessed word of "train"
 * @function
 *
 * @param {object} state -Initial condition
 * @returns {Wrapper} - Enzyme wrapper of mounted App Component
 */

//  TODO : apply state
const setup = (state = {}) => {
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate click
  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe.only("no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ secretWord: "party", success: false, guessedWords: [] });
  });
  test("creates a GuessedWords table with 1 row", () => {
    const guessedWordsRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsRows).toHaveLength(1);
  });
});

describe.skip("some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
  });

  test("Add row to guessedWords table", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessedWord");
    expect(guessedWordNodes).toHaveLength(2);
  });
});

describe.skip("guess the secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
    //add value to input box
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "party" } };
    inputBox.simulate("change", mockEvent);

    // simulate click on submit button
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("adds row to guessedWords table", () => {
    const guessedWordNodes = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordNodes).toHaveLength(3);
  });
  test("display congrats component", () => {
    const congrats = findByTestAttr(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });
  test("does not display input component contens", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.exists()).toBe(false);
  });
});
