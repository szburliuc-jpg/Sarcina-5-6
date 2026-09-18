const grades = [7, 9, 5, 10, 8, 6];


const highGrades = grades.filter(grade => grade >= 8);

console.log("Note >= 8:", highGrades);


const sum = grades.reduce((total, grade) => total + grade, 0);
const average = sum / grades.length;

console.log("Media notelor:", average);


const increasedGrades = grades.map(grade => Math.min(grade + 1, 10));

console.log("Note mărite cu 1:", increasedGrades);