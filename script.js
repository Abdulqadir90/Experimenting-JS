console.log("hello world");

let tweet = prompt("Write your new tweet:");
let tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + ( 140 - tweetCount ) + " characters remaining.");
