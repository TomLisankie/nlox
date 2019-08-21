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
	return <span className={props.className}>
	    {props.children}
	    </span>
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
    const sourceCodeDiv = <div {...sourceCodeProps} />
    ReactDOM.render (sourceCodeDiv, sourceDiv);
}

generateInterface (3);
