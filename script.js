

// Sample array of employees
let employees = [
  {id: 1,name:"john",age:"18",profession:"developer"},
{id: 2, name:"jack",age:"20", profession:"developer"},
{id: 3, name:"karen", age:"19",profession:"admin"}
];

// Function to print employees with the profession of developer using the map function
function PrintDeveloperbyMap() {
  const developers = employees.filter(employee => employee.profession === "developer");
  developers.map(developer => console.log(developer));
}

// Function to print employees with the profession of developer using the forEach function
function PrintDeveloperbyForEach() {
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to add a new employee to the array
function addData() {
  const newEmployee = { id: 4, name: "Susan", age: 20, profession: "intern" };
  employees.push(newEmployee);
  console.log(newEmployee);
}

// Function to remove employees with the profession of admin from the array
function removeAdmin() {
  employees = employees.filter(employee => employee.profession !== "admin");
  console.log(employees);
}

// Function to concatenate two arrays
function concatenateArray() {
  const newArray = [
    { id: 5, name: "Pratik", age: 28, profession: "developer" },
    { id: 6, name: "Akash", age: 32, profession: "designer" },
    { id: 7, name: "Sanket", age: 24, profession: "developer" }
  ];

  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);
}

// Test the functions
PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray()
