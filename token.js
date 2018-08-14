/*  Lets tokenize the below code */
/*
let five = 5; 
let ten = 10; 
let add = fn( x, y) { x + y; }; 
let result = add( five, ten);

*/



class Token {
    constructor(options) {
        this.Type = options.Type || "";
        this.Literal = options.Literal || "";
    }
}

module.exports = Token;