
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
    
}

export default Queue;
