import React, { Component } from "react";
import ReactDOM from "react-dom";

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
	    <div className="source-container"> </div>
	);
    }
    
}

export default SourceContainer;
