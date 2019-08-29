import React from "react";
import TokenBox from "../presentational/TokenBox.jsx";

class TokenDiv extends React.Component {
    
    constructor (props) {
	super (props);
	this.state = {
	    tokens : []
	}
    }

    render () {

	const tokens = this.state.tokens.map ((token) => <TokenBox color="lightblue" tokenText={token} />);
	
	return (
	    <div className="token-div">
	      <TokenBox color="lightblue" tokenText="OOOOOOOOOOOOOOOOOOOOOOOO" />
	      {tokens}
	    </div>
	);
    }
    
}

export default TokenDiv;
