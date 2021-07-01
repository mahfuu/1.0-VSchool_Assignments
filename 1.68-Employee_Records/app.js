let employee = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

let bob = new Employee("Bob", "V School Instructor", "$75/hour", "Part time")
let jill = new Employee("Jill", "Teacher Assistant", "$25/hour", "Part time")
let frank = new Employee("Frank", "Janitor", "$14/hour", "Part time")

const printEmployeeForm = namedEmployee => console.log(namedEmployee)
// console.log(printEmployeeForm(bob))

const employeePushToArray = givenEmployee => employee.push(givenEmployee)

bob.status = "contract"
// console.log(printEmployeeForm(bob))

function initialEmployees() {
    employeePushToArray(bob)
    employeePushToArray(jill)
    employeePushToArray(frank)
    for (let i = 0; i < employee.length; i++){
        console.log(employee[i])
    }
}

// call the function to see in console
// initialEmployees()
Employee.prototype.status = "Full time"

let gina = new Employee("Gina", "Chief Financial Office", "$225/hour")

printEmployeeForm(jill)