import React from "react";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Congrats from "../src/Congrats";
import { findByTestAttr, checkProps } from "../testUtils";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};
test("renders without error ", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("render no text when success prop is false", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("rendes non-empty congrats message whenn success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});
