// Employee Performance Evaluation System

function evaluateEmployees(employees) {
    // 1. Filter employees who have completed more than 5 tasks
    const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);
  
    // 2. Map filtered employees to a new array with name and performance level
    const mappedEmployees = filteredEmployees.map(employee => ({
      name: employee.name,
      performanceLevel: employee.rating > 4.5 ? 'Excellent' : employee.rating >= 3 ? 'Good' : 'Needs Improvement'
    }));
  
    // 3. Sort the final array by performance level in descending order
    const sortedEmployees = mappedEmployees.sort((a, b) => {
      const performanceOrder = ['Excellent', 'Good', 'Needs Improvement'];
      return performanceOrder.indexOf(b.performanceLevel) - performanceOrder.indexOf(a.performanceLevel);
    });
  
    return sortedEmployees;
  }
  
  
  const employees = [
    { name: 'Alice', tasksCompleted: 8, rating: 4.7 },
    { name: 'Bob', tasksCompleted: 4, rating: 4.0 },
    { name: 'Charlie', tasksCompleted: 6, rating: 3.5 },
    { name: 'David', tasksCompleted: 10, rating: 4.9 },
    { name: 'Eve', tasksCompleted: 7, rating: 2.8 }
  ];
  
  const result = evaluateEmployees(employees);
  console.log(result);