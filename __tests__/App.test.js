import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../testUtils";
import { App } from "../src/App";
import { configEnzyme } from "../src/setupTests";
configEnzyme();

/**
 *
 * @returns {ShallowWrapper}
 *
 */
const setup = () => {
  return shallow(<App />);
};
test("render without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "component-app");
  expect(app).toHaveLength(1);
});
