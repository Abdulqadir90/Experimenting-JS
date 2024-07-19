// console.log("hello world");

// let tweet = prompt("Write your new tweet:");
// let tweetCount = tweet.length;
// alert("You have written " + tweetCount + " characters, you have " + ( 140 - tweetCount ) + " characters remaining.");


// alert(prompt("Write your tweet:").slice(0,140)); 
//same concept however this will only allow up to 140 characters

// function lifeInWeeks(age) {
//     let yearsRemaining = 90 - age;
//     let days = yearsRemaining * 365; 
//     let weeks = yearsRemaining * 52;
//     let months = yearsRemaining * 12
//     console.log("you have " + days +" days, " + weeks + " weeks, " + months + " months remaining");

    
// }

// lifeInWeeks(10);

// creating a function that calculates the bmi in weight and height

function bmiCalculator(weight, height){ // inputs of weight and height
    let bmi = weight / (height * height); // calculating the value of bmi (brackets because of order of importance)
    return bmi; // to get the value of bmi out of the function
}
let bmi = bmiCalculator(100, 1.9);
console.log(bmi);