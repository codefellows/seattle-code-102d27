let url ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bbyoda-1575303784.jpeg"

function getUserName(){
    let userName = prompt('Please Enter Your Name: ');
    console.log(userName);
    document.write('<h2>' + userName + '</h2>');
    return userName; // -> 'MARK'
}

function getUserAnswer(){
    let userAnswer = prompt('Do you like Star Wars? (yes or no)');
    console.log(userAnswer);
    
    if (userAnswer.toLowerCase() == 'yes') {
        document.write('<h3>Welcome SW Fan</h3>');
    } else {
        document.write('<h3>Beat it Trekkie!</h3>');
    }
}

function getBabyYodaAnswer(){
    let likeBabyYoda = prompt('Do you think Baby Yoda is cute?')

    if (likeBabyYoda.toLowerCase() == 'yes'){
        document.write('<h3>He is SOooooo Cute!!</h3>');
        document.write('<img src="' + url + '"/>')
    }
}


function userGuessingGame() {
    correctAnswer = Math.floor(Math.random() * 100) + 1;
    console.log(correctAnswer)
    userAttempts = 6;
    for(let i = 0; i < userAttempts; i++){
        let userGuess = prompt('Please Enter a Number 1 - 100');
        while(userGuess < 1 || userGuess > 100){
            userGuess = prompt('Wrong Range.  Please Enter a Number 1 - 100');
        }
        if (userGuess == correctAnswer){
            alert('You got it right!');
            break;
        } else if(userGuess < correctAnswer){
            alert('To Low.  Try Again.')
        }  else if (userGuess > correctAnswer) {
            alert('To High.  Try Again.')
        } else {
            alert('Something Else Went Wrong.');
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('You did not win.  Correct Anser is: ' + correctAnswer);
        }
    }
}

userGuessingGame();

function babyYoda(){
    let numberOfBabyYoda = prompt('How many times do you want to see Baby Yoda!')
    for(let i = 0; i < numberOfBabyYoda; i ++){
        document.write('<img src="' + url + '" >')
    }
}
