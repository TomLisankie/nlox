import React, { Component } from "react";
import ReactDOM from "react-dom";
import SourceTextArea from "../presentational/SourceTextArea.jsx";
import Button from "../presentational/Button.jsx";
import SourceDiv from "./SourceDiv.jsx";
import HighlightedChar from "../presentational/HighlightedChar.jsx";
import TokenDiv from "./TokenDiv.jsx";

import Scanner from "../../../../src/Scanner.js";

class SourceContainer extends Component {
    constructor (props) {
	super (props);

	this.state = {
	    scanning : false
	};

	this.scanButtonClicked = () => {

	    this.setState({scanning : true});

	    
	    const scanner = new Scanner ();
	    scanner.scanTokens (document.querySelector (".source-text-area").value);
	    // Source has now been scanned and tokens lexed out
	    // Job of interface is to visually replicate the state at every point where there was a change to the state.
	    console.log (scanner.shelf);
	    const numOfStates = scanner.shelf.states.getLength ();
	    for (var i = 0; i < numOfStates; i++) {
		//const currentState = scanner.shelf.getNextState ();
		//construct render with corresponding characters highlighted
	    }

	}

	this.editAndRestartButtonClicked = () => {
	    this.setState ({scanning : false});
	}
    }

    render () {
	return (
	    <div id="page">
	      <div id="source-container" className="col-md-6">
		{
		    this.state.scanning ?
			<div className="scanning">
			      <SourceDiv
				    text={document.querySelector(".source-text-area").value} initiallyHighlightedIndex={1}/>
				  <Button
					onClickFunc={this.editAndRestartButtonClicked}
					text={"Edit source and restart"} />
			    </div>
			    :
			    <div className="editing">
				  <SourceTextArea
					rows={10}
					columns={60}
					defaultText="var hi = 'hello there';" />
				      <Button
					    onClickFunc={this.scanButtonClicked}
					    text={"Scan source"} />
				</div>
			    }
	      </div>
	      <div id="token-container" className="col-md-6">
		{
		    this.state.scanning ?
			<div className="scanned-tokens">
			      <TokenDiv />
			    </div>
			    :
			    <div className="no-scanned">
				  To start scanning, click the "Scan source" button on the left.
				</div>
		}
	      </div>
	    </div>
	);
    }
    
}


export default SourceContainer;

const wrapper = document.getElementById ("source");
wrapper ? ReactDOM.render (<SourceContainer />, wrapper) : false;
