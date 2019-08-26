import React, { Component } from "react";
import ReactDOM from "react-dom";
import SourceTextArea from "../presentational/SourceTextArea.jsx";
import Button from "../presentational/Button.jsx";
import SourceDiv from "../presentational/SourceDiv.jsx";
import HighlightedChar from "../presentational/HighlightedChar.jsx";

import Scanner from "../../../../src/Scanner.js";

class SourceContainer extends Component {
    constructor (props) {
	super (props);

	this.state = {
	    scanning : false
	};

	this.scanButtonClicked = () => {

	    if (this.state.scanning) {
		this.setState ({scanning : false});
	    } else {
		this.setState({scanning : true});
		const scanner = new Scanner ();
		scanner.scanTokens (document.querySelector (".source-text-area").value);
		// Source has now been scanned and tokens lexed out
		// Job of interface is to visually replicate the state at every point where there was a change to the state.
		console.log (scanner.shelf);
		const numOfStates = scanner.shelf.states.getLength ();
		for (var i = 0; i < numOfStates; i++) {
		    const currentState = scanner.shelf.getNextState ();
		    //construct render with corresponding characters highlighted
		}
	    }

	}
    }

    render () {
	return (
	    <div className="source-container">
	      {
		  this.state.scanning ?
		      <SourceDiv
			    style={{display : "block"}}
			    text={document.querySelector(".source-text-area").value} indexOfCharToHighlight={3} />
			  :
			  <SourceTextArea
				rows={10}
				columns={60}
				defaultText="var hi = 'hello there';" />
	      }
	      <Button
		onClickFunc={this.scanButtonClicked}
		text={"Scan source"} />
	    </div>
	);
    }
    
}


export default SourceContainer;

const wrapper = document.getElementById ("source");
wrapper ? ReactDOM.render (<SourceContainer />, wrapper) : false;
