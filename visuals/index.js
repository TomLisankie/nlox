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

function generateInterface () {
    const sourceDiv = document.getElementById ("source");
    const sourceString = "var hi = 'hello there';";
    const highlightedChar = <span className="highlight" children="h" />
    const sourceCodeProps = {
	className : "sourceCode",
	children : [sourceString, highlightedChar]
    }
    const sourceCodeDiv = <div {...sourceCodeProps} />
    ReactDOM.render (sourceCodeDiv, sourceDiv);
}

generateInterface ();
