//Understanding Global and Function Execution Context
let age = 25;
function displayAge() {
  console.log("Age:", age);
}
function changeAge() {
  age = 30;
  console.log("Age after changing:", age);
}
displayAge(); 
changeAge(); 