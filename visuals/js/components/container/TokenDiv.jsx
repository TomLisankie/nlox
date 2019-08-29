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
	
	return (
	    <div className="token-div">
	      <TokenBox color="lightblue" tokenText="OOOOOOOOOOOOOOOOOOOOOOOO" />
	      {tokenEles}
	    </div>
	);
    }
    
}

export default TokenDiv;
