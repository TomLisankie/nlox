import React from "react";
import TokenBox from "../presentational/TokenBox.jsx";

class TokenDiv extends React.Component {
    
    constructor (props) {
	super (props);
    }

    render () {
	return (
	    <div className="token-div">
	      <TokenBox color="lightblue" tokenText="OOOOOOOOOOOOOOOOOOOOOOOO" />
	    </div>
	);
    }
    
}

export default TokenDiv;
