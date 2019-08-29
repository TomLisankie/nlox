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
	    scanning : false,
	    shelf : null,
	    tokens : []
	};

	this.advanceState = (text, theShelf) => {
	    if (theShelf != null) {
		
		// if (nextState.currentIndex >= document.querySelector (".source-text-area").value) {
		//     return;
		// }

		const nextState = theShelf.getNextState ();

		let currentTokens = this.state.tokens;
		if (nextState.wasNewToken) {
		    currentTokens.push (nextState.tokenText)
		    console.log ("Current Tokens: ", currentTokens);
		}
		
		this.setState ({
		    scanning : true,
		    shelf : theShelf,
		    currentState : nextState,
		    text : text,
		    tokens : currentTokens
		});
		
	    }
	}

	this.scanButtonClicked = () => {

	    const scanner = new Scanner ();
	    const textAreaVal = document.querySelector(".source-text-area").value;
	    scanner.scanTokens (textAreaVal);

	    this.advanceStateInterval = setInterval (() => this.advanceState (textAreaVal, scanner.shelf), 500);
	    
	}
	
	this.editAndRestartButtonClicked = () => {

	    clearInterval (this.advanceStateInterval);
	    this.setState ({
		scanning : false,
		shelf : null,
		tokens : []
	    });
	}
    }

    componentWillUnmount () {
	clearInterval (this.advanceStateInterval);
    }

    render () {
	
	return (
	    <div id="page">
	      <div id="source-container" className="col-md-6">
		{
		    this.state.scanning ?
			<div className="scanning">
			      <SourceDiv
				    text={this.state.text} currentHighlightIndex={this.state.currentState.currentIndex} peek={this.state.currentState.peeked} peekIndex={this.state.currentState.peekIndex} />
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
			      <TokenDiv tokens={this.state.tokens} />
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
