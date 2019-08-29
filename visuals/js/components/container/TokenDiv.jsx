import React from "react";
import TokenBox from "../presentational/TokenBox.jsx";

class TokenDiv extends React.Component {
    
    constructor (props) {
	super (props);
	this.state = {
	    tokens : props.tokens
	}
    }

    render () {
	
	const tokenEles = this.props.tokens.map ((token) => <TokenBox color="lightblue" tokenText={token} />);
	console.log (this.props.tokens);
	
	return (
	    <div className="token-div">
	      {tokenEles}
	    </div>
	);
    }
    
}

export default TokenDiv;
