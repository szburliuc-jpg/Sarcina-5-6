export function getStudentsWithHighGrades(students) {
    return students.filter(student => student.grade >= 8);
}

export function calculateClassAverage(students) {
    if (students.length === 0) {
        return 0;
    }

    const grades = students.map(student => student.grade);

    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function findStudentById(students, id) {
    const student = students.find(student => student.id === id);

    if (!student) {
        throw new Error(`Elevul cu id-ul ${id} nu există.`);
    }

    return student;
}

export function addStudent(students, student) {
    return [...students, student];
}

export function displayStudents(students) {
    students.forEach(student => {
        console.log(
            `ID: ${student.id} | Nume: ${student.name} | Nota: ${student.grade}`
        );
    });
}