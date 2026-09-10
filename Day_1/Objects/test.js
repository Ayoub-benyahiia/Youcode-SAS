// test 




const employees = [
    {
        "name": "Alice Johnson",
        "age": 29,
        "department": "Engineering",
        "salary": 75000
    },
    {
        "name": "Bob Smith",
        "age": 34,
        "department": "Marketing",
        "salary": 68000
    },
    {
        "name": "Carol Williams",
        "age": 41,
        "department": "Finance",
        "salary": 82000
    },
    {
        "name": "David Brown",
        "age": 26,
        "department": "Human Resources",
        "salary": 61000
    }
]

//let totaldage = 0;

function AvgAge(employees) {
    let somme = 0;
    let len = employees.length
    for (let i = 0; i < len; i++) {
        somme = somme + employees[i].age
        //console.log(employees[i].age)
    };
    return somme/len;
};
output = AvgAge(employees);
console.log("total dage "+ output);

