var username = prompt ("Enter your name:");
var gender = prompt("What is your gender?(male/female)");

var age = prompt("How old are you?");
if (age <= 0) {
alert ("The age you entered is less that or equal zero")    
};
alert (`Do you want to skip the welcoming message ${username}?`);

switch (gender) {
    case "male":
        alert (`Welcome Mr. ${username}`)
        break;
    case "female":
    alert (`Welcome Ms. ${username}`)
    break;
    default:
        alert (`Welcome ${username}`)
        break;
}
