
import Queue from "./Queue.js"

class Shelf {
    constructor () {
	// what is the information the visualizer needs to know about the state of the interpreter?
	// What are the visuals the scanning action will show?
	// - which character index is currently being examined
	// - which character index is currently being peeked
	// - when a new token is found

	this.currentIndices = new Queue ();
	this.peekedIndices = new Queue ();
	this.newTokens = new Queue ();

	this.states = new Queue ();
    }

    addCurrentIndex (index) {
	this.currentIndices.enqueue (index);
	this.addState (index, false, this.peekedIndices.peekEnd (), false, this.newTokens.peekFront ());
    }

    addPeekedIndex (index) {
	this.peekedIndices.enqueue (index);
	this.addState (this.currentIndices.peekEnd (), true, index, false, this.newTokens.peekEnd ());
    }

    addToken (token) {
	this.newTokens.enqueue (token);
	this.addState (this.currentIndices.peekEnd (), false, this.peekedIndices.peekEnd (), true, token);
    }
    

    getNextIndex () {
	return this.currentIndices.dequeue ();
    }

    getPeekedIndex () {
	return this.peekedIndices.dequeue ();
    }

    getNextToken () {
	return this.newTokens.dequeue ();
    }


    addState (currentIndex, peeked, peekIndex, wasNewToken, mostRecentToken) {
	this.states.enqueue (
	    {
		currentIndex : currentIndex,
		peeked : peeked,
		peekIndex : peekIndex,
		wasNewToken : wasNewToken,
		tokenText : mostRecentToken
	    }
	);
    }

    getNextState () {
	return this.states.dequeue ();
    }
    
}

export default Shelf;
