function process(students){
    const filteredStudensts = students.filter(student => student.marks > 60);
    const sortedStudents = filteredStudensts.sort((a,b) => b.marks - a.marks);
    const sortedNames = sortedStudents.map(student => student.name);
    return sortedNames;
}
const students = [
    {name: "ritu",marks: 98},
    {name: "pragati",marks: 58},
    {name: "bob",marks: 45},
    {name: "david",marks: 85}
];
const sortedNames= process(students);
console.log(sortedNames);