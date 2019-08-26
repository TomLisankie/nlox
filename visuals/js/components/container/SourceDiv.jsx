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
	    console.log (this.scanner.shelf.getNextState);
	    this.setState ({
		currentlyHighlighted : this.scanner.shelf.getNextState ().currentIndex
	    });
	}
	
    }

    componentDidMount () {
	this.scanner.scanTokens (this.props.text);
	this.advanceHighlightInterval = setInterval (() => this.advanceHighlight(), 500);
    }

    componentWillUnmount () {
	clearInterval (this.advanceHighlightInterval);
    }

    render () {
	
	var beginningOfSource = this.props.text.substring (0, this.state.currentlyHighlighted - 1);
	var charToBeHighlighted = this.props.text.substring (this.state.currentlyHighlighted - 1, this.state.currentlyHighlighted);
	var restOfSource =  this.props.text.substring (this.state.currentlyHighlighted);

	console.log (charToBeHighlighted);
	
	return (
	    <div className={"source-div"}>
	      {beginningOfSource}
	      <HighlightedChar className="highlight-current" character={charToBeHighlighted} />
	      {restOfSource}
	    </div>
	);
	
    }

}

export default SourceDiv;
