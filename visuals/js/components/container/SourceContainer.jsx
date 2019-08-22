import React, { Component } from "react";
import ReactDOM from "react-dom";
import SourceTextArea from "../presentational/SourceTextArea.jsx";

class SourceContainer extends Component {
    constructor () {
	super ();

	this.state = {
	    scanning : false,
	    editing : true
	};
    }

    render () {
	return (
	    <div className="source-container">
	      <SourceTextArea
		rows={40}
		cols={50}
		defaultText="var hi = 'hello there';" />
	    </div>
	);
    }
    
}



export default SourceContainer;

const wrapper = document.getElementById ("source");
wrapper ? ReactDOM.render (<SourceContainer />, wrapper) : false;
