import React from "react";
import TokenBox from "../presentational/TokenBox.jsx";
import TokenType from "../../../../src/TokenType.js"

class TokenDiv extends React.Component {
    
    constructor (props) {
	super (props);
	this.state = {
	    tokens : props.tokens
	}
	
	this.tokenColors = {}
	// the following abomination is unfortunately the only way to have an enum value as a key in a JS object
	    this.tokenColors[TokenType.LEFT_PAREN] = "aqua";
	    this.tokenColors[TokenType.RIGHT_PAREN] = "aquamarine";
	    this.tokenColors[TokenType.LEFT_BRACE] = "beige";
	    this.tokenColors[TokenType.RIGHT_BRACE] = "bisque";
	    this.tokenColors[TokenType.COMMA] = "blue";
	    this.tokenColors[TokenType.DOT] = "blueviolet";
	    this.tokenColors[TokenType.MINUS] = "cadetblue";
	    this.tokenColors[TokenType.PLUS] = "chartreuse";
	    this.tokenColors[TokenType.SEMICOLON] = "coral";
	    this.tokenColors[TokenType.SLASH] = "cornflowerblue";
	    this.tokenColors[TokenType.STAR] = "crimson";

	    this.tokenColors[TokenType.BANG] = "darkcyan";
	    this.tokenColors[TokenType.BANG_EQUAL] = "darkgoldenrod";
	    this.tokenColors[TokenType.EQUAL] = "darkgreen";
	    this.tokenColors[TokenType.EQUAL_EQUAL] = "darkmagenta";
	    this.tokenColors[TokenType.GREATER] = "darkorange";
	    this.tokenColors[TokenType.GREATER_EQUAL] = "darksalmon";
	    this.tokenColors[TokenType.LESS] = "darkseagreen";
	    this.tokenColors[TokenType.LESS_EQUAL] = "deeppink";

	    this.tokenColors[TokenType.IDENTIFIER] = "deepskyblue";
	    this.tokenColors[TokenType.STRING] = "firebrick";
	    this.tokenColors[TokenType.NUMBER] = "fuchsia";

	    this.tokenColors[TokenType.AND] = "gold";
	    this.tokenColors[TokenType.CLASS] = "green";
	    this.tokenColors[TokenType.ELSE] = "greenyellow";
	    this.tokenColors[TokenType.FALSE] = "hotpink";
	    this.tokenColors[TokenType.FUN] = "lawngreen";
	    this.tokenColors[TokenType.FOR] = "khaki";
	    this.tokenColors[TokenType.IF] = "lavender";
	    this.tokenColors[TokenType.NIL] = "lightcyan";
	    this.tokenColors[TokenType.OR] = "lightskyblue";
	    this.tokenColors[TokenType.PRINT] = "lime";
	    this.tokenColors[TokenType.RETURN] = "lightseagreen";
	    this.tokenColors[TokenType.SUPER] = "magenta";
	    this.tokenColors[TokenType.THIS] = "mediumvioletred";
	    this.tokenColors[TokenType.TRUE] = "mistyrose";
	    this.tokenColors[TokenType.VAR] = "mediumslateblue";
	    this.tokenColors[TokenType.WHILE] = "olive";

	this.tokenColors[TokenType.EOF] = "red";
	
    }

    render () {
	
	const tokenEles = this.props.tokens.map ((token) => <TokenBox color={this.tokenColors[token._type]} tokenText={token._lexeme} />);
	console.log (this.props.tokens);
	
	return (
	    <div className="token-div">
	      {tokenEles}
	    </div>
	);
    }
    
}

export default TokenDiv;
