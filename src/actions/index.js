import axios from "axios";

export const getSecretWord = () => {
  //TODO write action action in redux and context action

  
  // return response from server
  return axios.get("http://localhost:3030").then((response) => response.data);
};
