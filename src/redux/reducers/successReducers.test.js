import { actionTypes } from "../../actions/__mocks__";
import successReducer from "./successReducer";

test("when previuos state is undefined, return fale", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test("return previous state when unknow action type", () => {
  const newState = successReducer(false, { type: "unknown" });
  expect(newState).toBe(false);
});
test("return true for action type CORRECT_GUESS", () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
