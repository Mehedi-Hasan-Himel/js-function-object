function getTotal(assignment1,assignment2,assignment3) {
   const total = assignment1 + assignment2 + assignment3;
   const avaerage = total / 3;
   return(avaerage);
}

const assignment1 = 60;
const assignment2 = 58;
const assignment3 = 59;

const myAverage = getTotal(assignment1, assignment2, assignment3);

console.log(`My average is:`, myAverage);