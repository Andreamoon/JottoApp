import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkProps } from "../testUtils";
import { configEnzyme } from "../src/setupTests";
import Input from "../src/Input";

configEnzyme();
/**
 * @function setup
 * @param {object
 * } props
 * @returns {ShallowWrapper}
 */
const defaulProps = {
  secretWord: "party",
};

const setup = (props = {}) => {
  const setuProps = { ...defaulProps, ...props };

  return shallow(<Input {...setuProps} />);
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
  test("state updates with value of input box upon change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    //mock event
    const mockEvent = { target: { value: "train" } };

    //simula onchange con value train
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
