const grades = [7, 9, 5, 10, 8, 6];


const highGrades = grades.filter(grade => grade >= 8);

console.log("Note >= 8:", highGrades);


const sum = grades.reduce((total, grade) => total + grade, 0);
const average = sum / grades.length;

console.log("Media notelor:", average);


const increasedGrades = grades.map(grade => Math.min(grade + 1, 10));

console.log("Note mărite cu 1:", increasedGrades);
import { calculateAverage, calculateSum } from "./utils.js";

import {
    getStudentsWithHighGrades,
    calculateClassAverage,
    findStudentById,
    addStudent,
    displayStudents
} from "./students.js";

const students = [
    { id: 1, name: "Ana", grade: 9 },
    { id: 2, name: "Ion", grade: 7 },
    { id: 3, name: "Maria", grade: 10 },
    { id: 4, name: "Andrei", grade: 6 },
    { id: 5, name: "Elena", grade: 8 }
];

console.log("=== TOȚI ELEVII ===");
displayStudents(students);

console.log("\n=== ELEVI CU NOTA >= 8 ===");

const highGradeStudents = getStudentsWithHighGrades(students);
displayStudents(highGradeStudents);

console.log("\n=== MEDIA CLASEI ===");

const classAverage = calculateClassAverage(students);
console.log(`Media clasei este: ${classAverage}`);

console.log("\n=== CĂUTARE ELEV ===");

try {
    const student = findStudentById(students, 3);

    console.log(
        `Elev găsit: ${student.name}, nota: ${student.grade}`
    );
} catch (error) {
    console.log(`Eroare: ${error.message}`);
}

console.log("\n=== CĂUTARE ELEV INEXISTENT ===");

try {
    const student = findStudentById(students, 99);

    console.log(
        `Elev găsit: ${student.name}, nota: ${student.grade}`
    );
} catch (error) {
    console.log(`Eroare: ${error.message}`);
}

console.log("\n=== ADAUGARE ELEV NOU ===");

const newStudent = {
    id: 6,
    name: "Vlad",
    grade: 9
};

const updatedStudents = addStudent(students, newStudent);

displayStudents(updatedStudents);

console.log("\n=== FUNCȚII DIN utils.js ===");

const values = [10, 8, 9, 7, 6];

console.log(`Suma valorilor: ${calculateSum(values)}`);
console.log(`Media valorilor: ${calculateAverage(values)}`);