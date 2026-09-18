const employees = [
    {
        id: 1,
        name: "Ana Popescu",
        department: "IT",
        salary: 12000,
        experience: 5
    },
    {
        id: 2,
        name: "Ion Rusu",
        department: "Marketing",
        salary: 9000,
        experience: 2
    },
    {
        id: 3,
        name: "Maria Ciobanu",
        department: "IT",
        salary: 14000,
        experience: 7
    },
    {
        id: 4,
        name: "Andrei Lupu",
        department: "HR",
        salary: 8500,
        experience: 4
    },
    {
        id: 5,
        name: "Elena Munteanu",
        department: "Finance",
        salary: 11000,
        experience: 6
    },
    {
        id: 6,
        name: "Vlad Cojocaru",
        department: "Marketing",
        salary: 9500,
        experience: 3
    },
    {
        id: 7,
        name: "Irina Ceban",
        department: "IT",
        salary: 13000,
        experience: 4
    }
];

// Gruparea angajaților după departament
const employeesByDepartment = employees.reduce((groups, employee) => {
    const { department } = employee;

    if (!groups[department]) {
        groups[department] = [];
    }

    groups[department].push(employee);

    return groups;
}, {});

console.log("=== ANGAJAȚI PE DEPARTAMENTE ===");

Object.entries(employeesByDepartment).forEach(
    ([department, departmentEmployees]) => {
        console.log(`\nDepartament: ${department}`);

        departmentEmployees.forEach(({ name, salary }) => {
            console.log(`${name} - salariu: ${salary} lei`);
        });
    }
);

// Salariul mediu
const averageSalary =
    employees.reduce((sum, employee) => sum + employee.salary, 0) /
    employees.length;

console.log("\n=== SALARIUL MEDIU ===");
console.log(`Salariul mediu este: ${averageSalary} lei`);

// Angajați cu experiență mai mare de 3 ani
const experiencedEmployees = employees.filter(
    employee => employee.experience > 3
);

console.log("\n=== ANGAJAȚI CU EXPERIENȚĂ > 3 ANI ===");

experiencedEmployees.forEach(({ name, experience }) => {
    console.log(`${name} - ${experience} ani experiență`);
});

// Majorarea salariului cu 10%
const updatedEmployees = employees.map(employee => {
    if (employee.experience > 3) {
        return {
            ...employee,
            salary: employee.salary * 1.1
        };
    }

    return {
        ...employee
    };
});

console.log("\n=== RAPORT FINAL ===");

updatedEmployees.forEach(
    ({ id, name, department, salary, experience }) => {
        console.log(
            `ID: ${id} | ${name} | Departament: ${department} | ` +
            `Salariu: ${salary.toFixed(2)} lei | ` +
            `Experiență: ${experience} ani`
        );
    }
);