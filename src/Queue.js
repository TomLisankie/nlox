
class Queue {
    
    constructor () {
	this.list = [];
    }

    enqueue (ele) {
	this.list.push (ele);
    }

    dequeue () {
	return this.list.shift ();
    }

    peekFront () {
	return this.list [0];
    }

    peekEnd () {
	return this.list [this.list.length - 1];
    }

    getLength () {
	return this.list.length;
    }
    
}

export default Queue;
