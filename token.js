const TokenTypes = require('./token-types');

/*  Lets tokenize the below code */
/*
let five = 5; 
let ten = 10; 
let add = fn( x, y) { x + y; }; 
let result = add( five, ten);

*/


const keywords = {
    "fn": TokenTypes.FUNCTION,
    "let": TokenTypes.LET
}

class Token {
   
    constructor(options) {
        options = options || {};
        this.Type = options.Type || "";
        this.Literal = options.Literal || "";
    }

    static lookupIdent(ident) {
        let tok = keywords[ident];
        if (tok) return tok;
        return TokenTypes.IDENT;
    }
}

module.exports = Token;
