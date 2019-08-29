import React from "react";
import PropTypes from "prop-types";

const TokenBox = function ({color, tokenText}) {
    return (
	<>
	  <div className="panel panel-default" style={{"backgroundColor" : color, "display" : "inline-block", "margin-right" : "20px", "font-size" : "30px"}}>
	  {tokenText}
	</div>
	</>
    );
}

export default TokenBox;
