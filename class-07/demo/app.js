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
    let url ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bbyoda-1575303784.jpeg"
    if (likeBabyYoda.toLowerCase() == 'yes'){
        document.write('<h3>He is SOooooo Cute!!</h3>');
        document.write('<img src="' + url + '"/>')
    }
}
