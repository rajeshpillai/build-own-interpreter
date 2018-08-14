const TokenTypes = {
    ILLEGAL: "ILLEGAL",  // token character we don't know
    EOF: "EOF",  // end of file, (to tell parser to stop parsing)
    IDENT: "IDENT",  // add, foobar, x, y, ...

    // Operators
    ASSIGN: "=",
    PLUS: "+",

    // Delimeters
    COMMA: ",",
    SEMICOLON: ";",

    LPAREN: "(",
    RPAREN: ")",
    LBRACE: "{",
    RBRACE: "}",

    // Keywords
    FUNCTION: "FUNCTION",
    LET: "LET",

};

module.exports = TokenTypes;