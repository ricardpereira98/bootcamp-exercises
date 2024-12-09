var text = 'login: abc@me.org;password: 1234';

let emailStart = 7;

let semicolon;

for (let i = emailStart; i < text.length; i++) {
    if (text.charAt(i) === ";") {
        semicolon = i;
        break;
    }
}

const pwOffset = 11;

let passwordStart = semicolon + pwOffset;

let userName = text.substring(emailStart, semicolon);

let userPassword = text.substring(passwordStart, text.length); 


console.log(userName);
console.log(userPassword);