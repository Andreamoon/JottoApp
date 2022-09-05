import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkProps } from "../testUtils";
import { configEnzyme } from "./setupTests";
import Input from "./Input";

configEnzyme();

//use global scope
const mockSetCurrentGuess = jest.fn();

// per usasre il destructirng su useState
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

/**
 * @function setup
 * @param {object
 * } props
 * @returns {ShallowWrapper}
 */
const defaulProps = {
  secretWord: "party",
};

const setup = (success = false, secretWord = "party") => {
  // const setuProps = { ...defaulProps, ...props };

  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe("Input component test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ defaulProps });
  });

  test("Input render withouht error", () => {
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
  });

  test("does not throw warning with expected props", () => {
    checkProps(Input, defaulProps);
  });

  test("Input prop must be a string", () => {});
});

describe("state controll input field", () => {
  let wrapper;
  let originalUseState;
  beforeEach(() => {
    //pulisci lo state
    mockSetCurrentGuess.mockClear();
    //memorizza lo state initiale
    originalUseState = React.useState;
    wrapper = setup();
  });

  afterEach(() => {
    //ritorna allo state iniziale
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    //mock event
    const mockEvent = { target: { value: "train" } };

    //simula onchange con value train
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("Input render withouht error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("input box not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("Input render withouht error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("input box  show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button  show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});
