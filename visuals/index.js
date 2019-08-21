function highlightEachChar (divName) {
    const source = document.getElementById (divName).innerHTML.trim();
    for (var i = 0; i < source.length; i++) {
	console.log ("i: ", i);
	setTimeout(function(){
    	    highlightCharAt (i, divName);
	}, 500);
    }
}

function highlightCharAt (position, divName) {
    var inputTextDiv = document.getElementById (divName);
    var innerHTML = inputTextDiv.innerHTML.trim();
    const source = removeStringsFromText (["<span class=\"highlight\">", "</span>", "amp;", "amp"], innerHTML);
    if (position >= 0) {
        innerHTML = source.substring (0, position) + "<span class='highlight'>" + source.substring (position, position + 1) + "</span>" + source.substring (position + 1);
        inputTextDiv.innerHTML = innerHTML;
    }
    
}

function removeStringsFromText (stringsToRemove, text) {
    if (stringsToRemove.length == 0) {
	    return text;
    } else {
        const [head, ...rest] = stringsToRemove;
        const newText = text.replace (new RegExp (head, ['g']), "");
        removeStringsFromText (rest, newText);
        return newText;
    }
}

const sourceString = "var hi = 'hello there';";

function generateInterface (pos) {
    const sourceDiv = document.getElementById ("source");
    
    function HighlightedChar (props) {
	if (props.children === undefined || props.children.length === 0) {
	    return <b>{"There needs to be at last one string passed in as a child to HighlightedChar"}</b>
	}
	return <span className={props.className}>
	    {props.children}
	    </span>
    }

    function ScanSourceButton (props) {
	return <button onClick={scanChars}>{props.children}</button>
    }

    HighlightedChar.propTypes = {
	className : PropTypes.string.isRequired
    }
    
    var beginningOfSource = sourceString.substring (0, pos - 1);
    var charToBeHighlighted = sourceString.substring (pos - 1, pos);
    var restOfSource =  sourceString.substring (pos);
    
    const sourceCodeProps = {
	className : "sourceCode",
	children : [beginningOfSource,
		    <HighlightedChar className="highlight" children={charToBeHighlighted} />,
		    restOfSource]
    }
    
    const sourceCodeDiv = <div {...sourceCodeProps} />;
    const buttonDiv = <div children={[<ScanSourceButton children="Scan Source" />]} />;
    ReactDOM.render ([sourceCodeDiv, buttonDiv], sourceDiv);

    //ReactDOM.render (buttonDiv, sourceDiv);
}

var position = 0;
function regen () {
    if (position < sourceString.length) {
	position = position + 1;
	generateInterface (position);
    }
}

function scanChars () {
    // begin scanning of chars
    setInterval (regen, 500);
}

generateInterface (1);
