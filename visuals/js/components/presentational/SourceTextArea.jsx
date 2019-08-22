import React from "react";
import PropTypes from "prop-types";

const SourceTextArea = function ({defaultText, rows, columns}) {
    return (
	<textarea autoFocus className={"source-text-area"} rows={rows} cols={columns} placeholder={defaultText}>
	  </textarea>
    );
}

SourceTextArea.propTypes = {
    rows : PropTypes.number.isRequired,
    columns : PropTypes.number.isRequired,
    defaultText : PropTypes.string.isRequired
};

export default SourceTextArea;
