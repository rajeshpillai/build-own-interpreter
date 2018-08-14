const token = require('./token');
const Lexer = require('./lexer');
const TokenTypes = require('./token-types');


//test_simple_next_token();
test_basic_source_code();

function test_simple_next_token() {
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

    let l = Lexer.New(input);

    tests.forEach((t) => {
        let token = l.nextToken();
        console.log("nextToken: ", token);
    });

}

function test_basic_source_code() {
    let input = `
        let five = 5;
        let ten = 10;
        let add = fn(x,y) {
            x + y;
        }

        let result = add(five,ten);
    `;

    let tests = [
        {[TokenTypes.LET]: "let"},
        {[TokenTypes.IDENT]: "five"},
        {[TokenTypes.ASSIGN]: "="},
        {[TokenTypes.INT]: "5"},
        {[TokenTypes.SEMICOLON]: ";"},
        {[TokenTypes.LET]: "let"},
        {[TokenTypes.IDENT]: "ten"},
        {[TokenTypes.ASSIGN]: "="},
        {[TokenTypes.INT]: "10"},
        {[TokenTypes.SEMICOLON]: ";"},
        {[TokenTypes.LET]: "let"},
        {[TokenTypes.IDENT]: "add"},
        {[TokenTypes.ASSIGN]: "="},
        {[TokenTypes.FUNCTION]: "fn"},
        {[TokenTypes.LPAREN]: "{"},
        {[TokenTypes.IDENT]: "x"},
        {[TokenTypes.COMMA]: ","},
        {[TokenTypes.IDENT]: "y"}, 
        {[TokenTypes.RPAREN]: ")"}, 
        {[TokenTypes.LBRACE]: "{"}, 
        {[TokenTypes.IDENT]: "x"}, 
        {[TokenTypes.PLUS]: "+"}, 
        {[TokenTypes.IDENT]: "y"}, 
        {[TokenTypes.SEMICOLON]: ";"}, 
        {[TokenTypes.RBRACE]: "}"}, 
        {[TokenTypes.SEMICOLON]: ";"}, 
        {[TokenTypes.LET]: "let"}, 
        {[TokenTypes.IDENT]: "result"}, 
        {[TokenTypes.ASSIGN]: "="},
         {[TokenTypes.IDENT]: "add"}, 
         {[TokenTypes.LPAREN]: "("}, 
         {[TokenTypes.IDENT]: "five"}, 
         {[TokenTypes.COMMA]: ","}, 
         {[TokenTypes.IDENT]: "ten"}, 
         {[TokenTypes.RPAREN]: ")"}, 
         {[TokenTypes.SEMICOLON]: ";"}, 
        {[TokenTypes.EOF]: ""},
    ];

    let l = Lexer.New(input);

    tests.forEach((t) => {
        let token = l.nextToken();
        console.log("nextToken: ", token);
    });

}