
let answers = [];
answers[0] = prompt ("Enter your name:");
answers[1] = prompt("What is your gender?(male/female)");

answers[2] = prompt("How old are you?");

while (answers[2] <=0) {
    alert ("The age you entered is less that or equal zero")
    answers[2] = prompt("How old are you?");
}

// if (answers[2] <= 0) {
// alert ("The age you entered is less that or equal zero")    
// };

confirm (`Do you want to skip the welcoming message ${answers[0]}?`);

switch (answers[1]) {
    case "male":
        alert (`Welcome Mr. ${answers[0]}`)
        break;
    case "female":
    alert (`Welcome Ms. ${answers[0]}`)
    break;
    default:
        alert (`Welcome ${answers[0]}`)
        break;
}

answers[3] = prompt (`Are you over the age of 21 ${answers[0]}?`);
switch (answers[3]) {
    case "Yes":
        answers[3] = "Yes"; 
        break;
    case "No":
        answers[3] = "No";
    break;
    default:
        answers[3] = "invalid";
        break;
}

answers[4] = prompt (`Is this your first time visiting our website ${answers[0]}?`);
switch (answers[4]) {
    case "Yes":
        answers[4] = "Yes"; 
        break;
    case "No":
        answers[4] = "No";
    break;
    default:
        answers[4] = "invalid";
        break;
}

answers[5] = prompt (`Are you using your laptop ${answers[0]}?`);
switch (answers[5]) {
    case "Yes":
        answers[5] = "Yes"; 
        break;
    case "No":
        answers[5] = "No";
    break;
    default:
        answers[5] = "invalid";
        break;
}
let reversedAnswers = [];
for (let i = 0; i < answers.length; i++) {
   reversedAnswers.unshift(answers[i]);
    
}
console.log(reversedAnswers)