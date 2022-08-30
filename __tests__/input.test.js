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


const setup = (props = {}) => {
//   const setuProps = { ...defaulProps, ...props };

  return shallow(<Input {...props} />);
};

test("Input render withouht error", () => {
    let wrapper  = setup()
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});
