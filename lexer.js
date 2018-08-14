const TokenTypes = require('./token-types');
const Token = require('./token');
class Lexer {
    constructor(options) {
        this.input = options.input || [];
        this.position = 0; // current position in input
        this.readPosition = 0; // current reading position
        this.ch = null;  // current char under examination
    }
    static New(input) {
        let l =  new Lexer({input: input});
        l.readChar();
        return l;
    }

    readChar() {
        if (this.readPosition >= this.input.length) {
            this.ch = 0;
        } else {
            this.ch = this.input[this.readPosition];
        }
        this.position = this.readPosition;
        this.readPosition += 1;
    }

    nextToken() {
        let tok = null;

        this.skipWhitespace();

        switch(this.ch) {
            case "=":
                tok = this.newToken(TokenTypes.ASSIGN, this.ch);
                break;
            case ";":
                tok = this.newToken(TokenTypes.SEMICOLON, this.ch);
                break;
            case ",":
                tok = this.newToken(TokenTypes.COMMA, this.ch);
                break;
            case "+":
                tok = this.newToken(TokenTypes.PLUS, this.ch);
                break;
            case "(":
                tok = this.newToken(TokenTypes.LPAREN, this.ch);
                break;
            case ")":
                tok = this.newToken(TokenTypes.RPAREN, this.ch);
                break;
            case "{":
                tok = this.newToken(TokenTypes.LBRACE, this.ch);
                break;
            case "}":
                tok = this.newToken(TokenTypes.RBRACE, this.ch);
                break;

            default: {
                if (this.isLetter(this.ch)) {
                    let ident = this.readIdentifier();
                    return new Token({Type: Token.lookupIdent(ident), 
                        Literal: ident});
                } else {
                    tok = this.newToken(TokenTypes.ILLEGAL, this.ch);
                }
                break;
            }
          
            case 0:
                tok = this.newToken({Type: TokenTypes.EOF, Literal: ""});
                break;
        }

        this.readChar();
        return tok;
    }

    skipWhitespace () {
        let ch = this.ch.trim();
        while (ch == ' ' || ch =='\t' ||ch=='\n'||ch=='\r') {
            this.readChar();
        }    
    }

    isLetter(ch) {
        return ('a' <= ch && ch <= 'z' || 
            'A' <= ch && ch <= 'Z' || ch == '_');
    }

    readIdentifier() {
        let position = this.position;
        while(this.isLetter(this.ch)) {
            this.readChar();
        }
        let lastPosition = this.position;

       return this.input.substring(position, lastPosition);
    }

    newToken(tokenType, ch) {
        let token = new Token({Type: tokenType, Literal: ch});
        return token;
    }
}

module.exports = Lexer;