// creating object for queue classs
var priorityQueue = new PriorityQueue();
 
// testing isEmpty and front on an empty queue
priorityQueue.empty();
priorityQueue.front();
 
//creating functions
var func1 = function() { console.log("Executing func1"); };
var func2 = function() { console.log("Executing func2"); };
var func3 = function() { console.log("Executing func3"); };
var func4 = function() { console.log("Executing func4"); };
var func5 = function() { console.log("Executing func5"); };
var func6 = function() { console.log("Executing func6"); };


// adding elements to the queue
priorityQueue.push(func1, 2);
priorityQueue.push(func2, 1);
priorityQueue.push(func3, 1);
priorityQueue.push(func4, 2);
priorityQueue.push(func5, 3);
 
// prints queue elements
priorityQueue.print();
 
// prints func2
priorityQueue.front();
 
// pritns func5
priorityQueue.back();
 
// removes func2
// priorityQueue contains
// [func3 func1 func4 func5]
priorityQueue.pop();
 
// Adding another element to the queue
priorityQueue.push(func6, 2);
 
// prints [func3 func1 func4 func6 func5]
priorityQueue.print();

// execute functions 
priorityQueue.unqueue();
