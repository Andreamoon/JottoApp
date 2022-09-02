import "jsdom-global/register"; //at the top of file, even before importing React

import React from "react";
import { mount, shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../testUtils";
import { App } from "../src/App";
import { configEnzyme } from "../src/setupTests";
configEnzyme();

// activate global mock to make sure getSecretWord does't make network call
jest.mock("../src/actions/");
import { getSecretWord as mockGetSecretWord } from "../src/actions";

/**
 *
 * @returns {ShallowWrapper}
 *
 */
const setup = () => {
  return mount(<App />);
};
test("render without error", () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, "component-app");
  expect(app).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test("get secret word retrieve on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test("getSecretWord does'nt run on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
