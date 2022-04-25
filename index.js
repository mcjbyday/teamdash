// include file system and inquirer libraries as variables
let fs = require('fs');
const inquirer = require('inquirer');
// include class definitions for Manager, Engineer, and Intern
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// declare an array of possible employees 
let myGlobalPeople = [];

// start with adding a manager for all runthroughs
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'mgrName',
        },
        {
            type: 'input',
            message: 'What is their employee ID?',
            name: 'mgrID',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'mgrEmail',
        },
        {
            type: 'input',
            message: "What is their office number?",
            name: 'mgrOfficeNum',
        },
        {
            type: 'confirm',
            message: "Add another team member? (hit enter for yes)",
            name: 'addPerson',
            default: true,
        }
    ])
        .then(({mgrName, mgrID, mgrEmail, mgrOfficeNum, addPerson} = response) => { 
            // having destructured the responses, create a manager instance and add it to your people array
            myGlobalPeople.push(new Manager(mgrName, mgrID, mgrEmail, mgrOfficeNum));
            // if there are additional team members to be added
            if (addPerson === true) {
                addTeamMember();
            } 
            // all team members are added, create the web page
            else {
                myWriteFunction();
            }
        })
    }
// using similar inquirer prompts to manager, get data for new Engineer or Intern class
const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "What is the role of this team member?",
            name: 'employeeType',
            editableList: false,
            choices: ['Engineer','Intern'],
        },
        {
            type: 'input',
            message: "What is their name?",
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is their employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: "What is their GitHub?",
            name: 'engGithub',
            when: answers => answers.employeeType == 'Engineer',
        },
        {
            type: 'input',
            message: "What is their school?",
            name: 'internSchool',
            when: answers => answers.employeeType == 'Intern',
        },
        {
            type: 'confirm',
            message: "Add another team member? (hit enter for yes)",
            name: 'addPerson',
            default: true,
        }
    ])
        .then(({employeeType, name, id, email, engGithub, internSchool, addPerson} = addOne) => {
            // when statements configure the responses to be relevant to the employee type
            // use Engineer constructor for an engineer
            if (employeeType == "Engineer") {
                myGlobalPeople.push(new Engineer(name, id, email, engGithub));    
            }
            // use Intern constructor for an engineer
            else if (employeeType == "Intern") {
                myGlobalPeople.push(new Intern(name, id, email, internSchool));
            }
            // keep running through the add team member function until no more people need to be added
            if (addPerson === true) {
                addTeamMember();
            } 
            else {
                myWriteFunction();
            }
        })
    }

function myWriteFunction() {
    // use global array and generate the doc using boilerplate card HTML with template literals
    fs.writeFile('./dist/garbage_out.html',
`<h1 class="project-title">${myGlobalPeople[0].name} who is a ${myGlobalPeople[0].getRole()}</h1>\n
<h1 class="project-title">${myGlobalPeople[1].name} who is a ${myGlobalPeople[1].getRole()}</h1>\n
<h1 class="project-title">${myGlobalPeople[2].name} who is a ${myGlobalPeople[2].getRole()}</h1>`, 
    (err) => err ? console.error(err) : console.log('Check directory for details'));
}

addManager();