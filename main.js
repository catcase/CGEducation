// log message to console to make sure page is linked
console.log('this page is linked!');


// create variables for a teacher name, department name, and three ratings
var teacher = 'Teacher: Sally Jones';

var dept = 'Department: Physics';

var ratingOne = 4.3;
var ratingTwo = 2.5;
var ratingThree = 5.0;

console.log(teacher);
console.log(dept);
console.log(ratingOne, ratingTwo, ratingThree);


// calculate average rating by adding ratings together, & divide by three
var avgRating = (ratingOne + ratingTwo + ratingThree) / 3;

console.log(avgRating);


// round the average rating to the nearest 10th decimal
avgRating = Math.round(avgRating * 10) / 10;

console.log(avgRating);


// store rating variables into one array
var ratingArray = [ratingOne, ratingTwo, ratingThree];


// create function to calculate & return avg rating from array
function getRatingAvg (ratingArray) {
  return ratingOne + ratingTwo + ratingThree / 3;
}

var finalRating = getRatingAvg();

console.log(finalRating);