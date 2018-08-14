const token = require('./token');
const Lexer = require('./lexer');
const TokenTypes = require('./token-types');


test_next_token();

function test_next_token() {
    let input = `=+(){},;`;

    let tests = [
        {[TokenTypes.ASSIGN]: "="},
        {[TokenTypes.PLUS]: "+"},
        {[TokenTypes.LPAREN]: "("},
        {[TokenTypes.RPAREN]: ")"},
        {[TokenTypes.LBRACE]: "{"},
        {[TokenTypes.RBRACE]: "}"},
        {[TokenTypes.COMMA]: ","},
        {[TokenTypes.SEMICOLON]: ";"},
        {[TokenTypes.EOF]: ""},
    ];

    console.log("TOKEN_TYPES: ", tests);

    let l = Lexer.New(input);

    tests.forEach((t) => {
        let token = l.nextToken();
        console.log("nextToken: ", token);
    });

}