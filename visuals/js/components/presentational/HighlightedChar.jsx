import React from "react";
import PropTypes from "prop-types";

const HighlightedChar = function ({className, character}) {
    return (
	<span className={props.className}> {props.character} </span>
    );
}

HighlightedChar.propTypes = {
    className : PropTypes.string.isRequired,
    character : PropTypes.string.isRequired
};

export default HighlightedChar;
