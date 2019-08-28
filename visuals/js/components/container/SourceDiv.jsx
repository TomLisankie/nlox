import React from "react";
import PropTypes from "prop-types";

import HighlightedChar from "../presentational/HighlightedChar.jsx";
import Scanner from "../../../../src/Scanner.js";

class SourceDiv extends React.Component {

    constructor (props) {
	super (props);

	this.state = {
	    currentlyHighlighted : props.initiallyHighlightedIndex
	    
	};

	this.scanner = new Scanner ();

	this.advanceHighlight = () => {
	    if (this.state.currentlyHighlighted >= this.props.text.length) {
		return;
	    }
	    let nextState = this.scanner.shelf.getNextState ();
	    this.setState ({
		currentlyHighlighted : nextState.currentIndex,
		peek : nextState.peeked,
		peekHighlight : nextState.peekIndex
	    });
	}
	
    }

    componentDidMount () {
	this.scanner.scanTokens (this.props.text);
	this.advanceHighlightInterval = setInterval (() => this.advanceHighlight (), 500);
    }

    componentWillUnmount () {
	clearInterval (this.advanceHighlightInterval);
    }

    render () {
	
	var beginningOfSource = this.props.text.substring (0, this.state.currentlyHighlighted - 1);
	var currentCharToBeHighlighted = this.props.text.substring (this.state.currentlyHighlighted - 1, this.state.currentlyHighlighted);
	var peekChar = this.props.text.substring (this.state.peekHighlight, this.state.peekHighlight + 1);
	var restOfSource = this.state.peek ? this.props.text.substring (this.state.currentlyHighlighted + 1) : this.props.text.substring (this.state.currentlyHighlighted);
	
	return (
	    <div className={"source-div"}>
	      {beginningOfSource}
	      {this.state.peek ? <React.Fragment><HighlightedChar className="highlight-current" character={currentCharToBeHighlighted} />
		<HighlightedChar className="highlight-peek" character={peekChar} /> </React.Fragment>
		  : <HighlightedChar className="highlight-current" character={currentCharToBeHighlighted} />
	      }
	      {restOfSource}
	    </div>
	);
	
    }

}

export default SourceDiv;
