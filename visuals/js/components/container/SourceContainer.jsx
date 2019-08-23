import React, { Component } from "react";
import ReactDOM from "react-dom";
import SourceTextArea from "../presentational/SourceTextArea.jsx";
import Button from "../presentational/Button.jsx";
import SourceDiv from "../presentational/SourceDiv.jsx";

import Scanner from "../../../../src/Scanner.js";

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
	      <SourceDiv
		style="display:none;"
		text="" />
	      <Button
		onClickFunc={beginScanning}
		text={"Scan source"} />
	    </div>
	);
    }
    
}

function beginScanning () {
    function hideTextArea () {
	document.querySelector (".source-text-area").setAttribute ("style", "display:none;");
    }

    function showSourceDiv () {
	const sourceDiv = document.querySelector (".source-div");
	sourceDiv.setAttribute ("style", "display:block;");
	sourceDiv.innerHTML = document.querySelector (".source-text-area").value;
    }

    hideTextArea ();
    showSourceDiv ();

    const scanner = new Scanner ();
    scanner.scanTokens (document.querySelector (".source-text-area").value);
    // Source has now been scanned and tokens lexed out
    // Job of interface is to visually replicate the state at every point where there was a change to the state.
    console.log (scanner.shelf);
    // start up scanner
    // start highlighting
}


export default SourceContainer;

const wrapper = document.getElementById ("source");
wrapper ? ReactDOM.render (<SourceContainer />, wrapper) : false;
