// let userName = 'Roger'
// userName = 'Tom'
// console.log(userName)


// userName = "John"
// console.log(userName)

let userName = prompt('Please Enter Your Name: ');
console.log(userName);
document.write('<h2>' + userName + '</h2>');

let userAnswer = prompt('Do you like Star Wars?');
console.log(userAnswer);

if (userAnswer == 'yes') {
    document.write('<h3>Welcome Lord ' + userName +'</h3>');
} else {
    document.write('<h3>' + userName +', beat it Trekkie!</h3>');
}