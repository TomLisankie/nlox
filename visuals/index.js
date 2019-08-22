
import SourceContainer from "./js/components/container/SourceContainer.jsx";

// const Scanner = require ("../src/Scanner");

// const sourceString = "var hi = 'hello there';";
// var scanning = false;

// function generateInterface (pos) {
//     const sourceDiv = document.getElementById ("source");
    
//     function HighlightedChar (props) {
// 	if (props.children === undefined || props.children.length === 0) {
// 	    return <b>{"There needs to be at last one string passed in as a child to HighlightedChar"}</b>
// 	}
// 	return <span className={props.className}>
// 	    {props.children}
// 	    </span>
//     }

//     function ScanSourceButton (props) {
// 	return <button onClick={scanChars}>{props.children}</button>
//     }

//     HighlightedChar.propTypes = {
// 	className : PropTypes.string.isRequired
//     }
    
//     var beginningOfSource = sourceString.substring (0, pos - 1);
//     var charToBeHighlighted = sourceString.substring (pos - 1, pos);
//     var restOfSource =  sourceString.substring (pos);
    
//     const sourceCodeProps = {
// 	className : "sourceCode",
// 	children : [beginningOfSource,
// 		    <HighlightedChar className="highlight" children={charToBeHighlighted} />,
// 		    restOfSource]
//     }
    
//     const sourceCodeDiv = <div {...sourceCodeProps} />;
//     const buttonDiv = <div children={[<ScanSourceButton children="Scan Source" />]} />;
//     ReactDOM.render ([sourceCodeDiv, buttonDiv], sourceDiv);

//     //ReactDOM.render (buttonDiv, sourceDiv);
// }

// var position = 0;
// function regen () {
//     if (scanning) {
// 	if (position < sourceString.length) {
// 	    position = position + 1;
// 	    generateInterface (position);
// 	}
//     }
// }

// function scanChars () {
//     // begin scanning of chars
//     if (!scanning) {
// 	scanning = true;
// 	setInterval (regen, 500);
//     } else {
// 	scanning = false;
//     }
// }

// generateInterface (1);

// /* basically what has to happen is:
// 1. Interface tells scanner to begin scanning
// 2. Scanner begins scanning and exports its state to some data structure in between the web interface and the scanner
// 3. Interface checks to see if there are updates to the shared data structure and updates accordingly
// */
