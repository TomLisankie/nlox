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

function generateInterface (pos) {
    const sourceDiv = document.getElementById ("source");
    const sourceString = "var hi = 'hello there';";
    var beginningOfSource = sourceString.substring (0, pos - 1);
    var highlightedChar = sourceString.substring (pos - 1, pos);
    var restOfSource =  sourceString.substring (pos);
    const highlightedCharSpan = <span className="highlight" children={highlightedChar} />;
    console.log (sourceString.substring (3));
    const sourceCodeProps = {
	className : "sourceCode",
	children : [beginningOfSource, highlightedCharSpan, restOfSource]
    }
    const sourceCodeDiv = <div {...sourceCodeProps} />
    ReactDOM.render (sourceCodeDiv, sourceDiv);
}

const sourceString = "var hi = 'hello there';";

function regenerateInterface (pos, waitTime) {
    setTimeout (() => {
	const sourceDiv = document.getElementById ("source");
	var beginningOfSource = sourceString.substring (0, pos - 1);
	var highlightedChar = sourceString.substring (pos - 1, pos);
	var restOfSource =  sourceString.substring (pos);
	const highlightedCharSpan = <span className="highlight" children={highlightedChar} />;
	console.log (sourceString.substring (3));
	const sourceCodeProps = {
	    className : "sourceCode",
	    children : [beginningOfSource, highlightedCharSpan, restOfSource]
	}
	const sourceCodeDiv = <div {...sourceCodeProps} />
	ReactDOM.render (sourceCodeDiv, sourceDiv);
    }, waitTime * 1000);
}

generateInterface (0);
regenerateInterface (i, 0.25);
// for (var i = 0; i < sourceString.length; i++) {
//     setTimeout (() => regenerateInterface (i, 0.25), 500);
// }

