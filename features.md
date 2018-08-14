Features
================

* C-like syntax
* Variable bindings
* Integers and Booleans
* Arithmetic expressions
* Built-in functions
* First-class and higher-order functions
* Closures
* A string data structure
* An array data structure
* A hash data structure
* Loops

Major parts of the interpreter
===================================
* the lexer
* the parser
* The Abstract Syntax Tree (AST)
* the internal object system
* the evaluator


Examples
==========
let age = 1;
let name = "rocket";
let result = 10 * (30/3);
let myArray = [1,2,3,4,5];

let user = { "name" : "Thanos", "age": "219"};

// Accessing elements
myArray[0];   // -> 1

user["name"]; // -> "Thanos"


// functions

let add = fn (a, b) { return a + b; };

// functions -> implicit return
let add = fn(a, b) { a + b; };

// Calling  a function
add (1,2);

// Recursive function

let fibonacci = fn(x) {
    if (x == 0) {
        0
    } else {
        1
    } else {
        fibonacci(x-1) + fibonacci(x-2);
    }
}

// Higher Order function
let twice = fn(f,x){
    return f(f(x));
}

let addTwo = fn(x) {
    return x + 2;
}

twice(addTwo, 2); // -> 6



