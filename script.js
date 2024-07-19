// console.log("hello world");

// let tweet = prompt("Write your new tweet:");
// let tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + ( 140 - tweetCount ) + " characters remaining.");


// alert(prompt("Write your tweet:").slice(0,140)); 
//same concept however this will only allow up to 140 characters

function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365; 
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12
    console.log("you have " + days +" days, " + weeks + " weeks, " + months + " months remaining");

    
}

lifeInWeeks(10);
