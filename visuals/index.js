function highlight (text) {
    var inputTextDiv = document.getElementById ("inputText");
    var innerHTML = inputTextDiv.innerHTML;
    var index = innerHTML.indexOf (text);
    if (index >= 0) {
	innerHTML = innerHTML.substring (0, index) + "<span class='highlight'>" + innerHTML.substring (index, index + text.length) + "</span>" + innerHTML.substring (index + text.length);
	inputTextDiv.innerHTML = innerHTML;
    }
    
}
