import React from "react";
import PropTypes from "prop-types";

const Button = function ({onClickFunc, text}) {
    return (
	<button onClick={onClickFunc}>{text}</button>
    );
}

Button.propTypes = {
    onClickFunc : PropTypes.func.isRequired,
    text : PropTypes.string
};

export default Button;
