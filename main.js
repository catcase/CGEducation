

// var getRatingAvg = ['3.5', '1.0', '5.0'];


function getRatingAvg(ratings) {
  // add all ratings in ratings array to sum
  var sum = 0;
  // var sum = 3.5 + 1.0 + 5.0;
  // var sum = ratings[0] + ratings[1] + ratings[2];
  // sum = sum + ratings[0];
  // sum = sum + ratings[1];
  // sum = sum + ratings[2];

  for (var i = 0; i <= 2; i++) {
    var rating = ratings[i];
    sum = sum + rating;
  }

  var avg = sum / ratings.length

  // todo: divide sum by array.length to get avg rating

  console.log(sum);
}

getRatingAvg([3.5, 1.0, 5.0]);

var teacherName = "Sally Jones"
var ratingsArray = [3.5, 1.0, 5.0]

function addTeacherRating(ratingsArray, newRating) {
  console.log(newRating)
  ratingsArray.push()
  console.log(ratingsArray)
}
addTeacherRating(ratingsArray, 2.6)


/* var ratingAvg = prompt("We would like for you to review. Please enter a number between 1 - 5");


while (ratingAvg > 5) {
  ratingAvg = prompt("Please enter a number between 1-5");
}
addTeacherRating(ratingsArray, ratingAvg)
alert("Thanks for your review! " + teacherName + " new rating is " + ratingAvg) */


var course = [
  ["Physics", "Science" ],
  ["Calculus", "Math"],
  ["Econ101", "Social Science"],
  ["Astronomy", "Science"]
];

function courseFilters(course, dept) {
  var filter = course.filter(item => item[1] === dept);
  return filter
}

var filteredCourses = courseFilters(course, "Science")
var filteredCourses2 = courseFilters(course, "Math")
var filteredCourses3 = courseFilters(course, "Social Science")

console.log(filteredCourses)
console.log(filteredCourses2)
console.log(filteredCourses3)

var department = prompt("What Department would you like to access?");
