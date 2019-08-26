import React from "react";
import PropTypes from "prop-types";

import HighlightedChar from "./HighlightedChar.jsx";

const SourceDiv = function ({style, text, indexOfCharToHighlight}) {

    var beginningOfSource = text.substring (0, indexOfCharToHighlight - 1);
    var charToBeHighlighted = text.substring (indexOfCharToHighlight - 1, indexOfCharToHighlight);
    var restOfSource =  text.substring (indexOfCharToHighlight);

    console.log (charToBeHighlighted);
    
    return (
	<div style={style} className={"source-div"}>
	  {beginningOfSource}
	  <HighlightedChar className="highlight" character={charToBeHighlighted} />
	  {restOfSource}
	</div>
    );
}

SourceDiv.propTypes = {
    text : PropTypes.string.isRequired,
    indexOfCharToHighlight : PropTypes.number.isRequired
};

export default SourceDiv;
