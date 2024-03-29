import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  if (success) {
    return <div data-test="component-input"></div>;
  }
  return (
    <div type="text" data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          onChange={(event) => setCurrentGuess(event.target.value)}
          value={currentGuess}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(evt) => {
            evt.preventDefault();
            //TODO update guessed words
            //TODO check against secretWord and update success if needed
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
