import React from "react";
import PropTypes from "prop-types";

const SourceDiv = function ({text}) {
    return (
	<div className={"source-div"}>
	  {text}
	</div>
    );
}

SourceDiv.propTypes = {
    text : PropTypes.string.isRequired
};

export default SourceDiv;
