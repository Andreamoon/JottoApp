import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT:GUESS",
};

/**
 * @function correctGuess
 * @returns  {object} - Action object with type "CORRECT_GUESS"
 */

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
export const getSecretWord = () => {
  //TODO write action action in redux and context action

  // return response from server
  return axios.get("http://localhost:3030").then((response) => response.data);
};
