
class Queue {
    
    constructor () {
	this.list = [];
    }

    enqueue (ele) {
	this.list.push (ele);
    }

    dequeue () {
	this.list.shift ();
    }

    peekFront () {
	return this.list [0];
    }
    
}

export default Queue;
