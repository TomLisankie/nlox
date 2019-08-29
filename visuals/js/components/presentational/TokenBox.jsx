import React from "react";
import PropTypes from "prop-types";

const TokenBox = function ({color, tokenText}) {
    return (
	<div className="panel panel-default" style={{"backgroundColor" : color, "display" : "inline-block"}}>
	  {tokenText}
	</div>
    );
}

export default TokenBox;
