function QueueElement(element,priority) {
    this.element = element;
    this.priority = priority;    
}


function PriorityQueue() {
    this.items = [];
}

PriorityQueue.prototype = {
    size: function() {
        // return the length of the queue.
        return this.items.length ;
    },
    empty: function() {
        // return true if the queue is empty.
        return this.items.length == 0;
    },
    print: function () {
         console.log(this.items);
    },
    push: function(element, priority) {
        // creating object from queue element
        var qElement = new QueueElement(element, priority);
        var contain = false;

        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
            }
    },
    pop: function() {
        // return the dequeued element and remove it.
        // if the queue is empty returns Underflow
        if (this.empty())
            return "Underflow";
        return this.items.shift();
    },
    front: function() {
        // returns the highest priority element
        // in the Priority queue without removing it.
        if (this.empty())
            return "No elements in Queue";
        return this.items[0];
    },
    back: function() {
        // returns the lowest priority element of the queue
        if (this.empty())
            return "No elements in Queue";
        return this.items[this.items.length - 1];
    },
    unqueue: function() {
        while (this.items.length > 0) {
            (this.pop().element)();  
        }
    }    

}
