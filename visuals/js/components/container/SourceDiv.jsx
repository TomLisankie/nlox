import React from "react";
import PropTypes from "prop-types";

import HighlightedChar from "../presentational/HighlightedChar.jsx";
import TokenBox from "../presentational/TokenBox.jsx";

import Scanner from "../../../../src/Scanner.js";

class SourceDiv extends React.Component {

    constructor (props) {
	super (props);

	this.state = {
	    currentlyHighlighted : props.initiallyHighlightedIndex
	    
	};
	
    }

    render () {
	
	var beginningOfSource = this.props.text.substring (0, this.props.currentHighlightIndex - 1);
	var currentCharToBeHighlighted = this.props.text.substring (this.props.currentHighlightIndex - 1, this.props.currentHighlightIndex);
	var peekChar = this.props.text.substring (this.props.peekIndex, this.props.peekIndex + 1);
	var restOfSource = this.props.peek ? this.props.text.substring (this.props.currentHighlightIndex + 1) : this.props.text.substring (this.props.currentHighlightIndex);
	
	return (
	    <div className={"source-div"} style={{"font-size" : "20px"}}>
	      {beginningOfSource}
	      {this.props.peek ? <React.Fragment><HighlightedChar className="highlight-current" character={currentCharToBeHighlighted} />
		<HighlightedChar className="highlight-peek" character={peekChar} /> </React.Fragment>
		  : <HighlightedChar className="highlight-current" character={currentCharToBeHighlighted} />
	      }
	      {restOfSource}
	    </div>
	);
	
    }

}

export default SourceDiv;
