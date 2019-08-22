import React, { Component } from "react";
import ReactDOM from "react-dom";
import SourceTextArea from "../presentational/SourceTextArea.jsx";
import Button from "../presentational/Button.jsx";

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
		rows={10}
		columns={60}
		defaultText="var hi = 'hello there';" />
	      <Button
		onClickFunc={hideTextArea}
		text={"Scan source"} />
	    </div>
	);
    }
    
}

function hideTextArea () {
    document.querySelector (".source-text-area").setAttribute ("style", "display:none;");
}



export default SourceContainer;

const wrapper = document.getElementById ("source");
wrapper ? ReactDOM.render (<SourceContainer />, wrapper) : false;
