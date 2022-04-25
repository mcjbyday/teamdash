// to do store inputs from inquirer into an object
let fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// onstart
// enter the team manager’s name, employee ID, email address, and office number
// OPTIONALLY
// add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

let myGlobalPeople = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
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
        .then(({mgrName, mgrID, mgrEmail, mgrOfficeNum} = response) => { 
            //myGlobalPeople.push(new Manager ( .. . .. )) 
            myGlobalPeople.push(new Manager(mgrName, mgrID, mgrEmail, mgrOfficeNum));
            if (response.addPerson) {
                addTeamMember();
            } 
            else {
                myWriteFunction();
                process.exit() 
            }
        })
    }


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
            message: "What is their github?",
            name: 'engGithub',
            when: answers => answers.employeeType == 'Engineer',
        },
        {
            type: 'input',
            message: "What is your school?",
            name: 'internSchool',
            when: answers => answers.employeeType == 'Intern',
        }
    ])
        .then(({employeeType, name, id, email} = addOne) => {
            if (employeeType == "Engineer") {
                myGlobalPeople.push(new Engineer(name, id, email, addOne.engGithub));    
            }
            else if (employeeType == "Intern") {
                myGlobalPeople.push(new Intern(name, id, email, addOne.internSchool));
            }
        })
    }

function myWriteFunction() {
    // use global array and generate the doc using boilerplate card HTML with template literals
    fs.writeFile('garbage_out.html',
`<h1 id="project-title">${myGlobalPeople[0]}</h1>\n
<h1 id="project-title">${myGlobalPeople[1]}</h1>\n
<h1 id="project-title">${myGlobalPeople[2]}</h1>`, 
    (err) => err ? console.error(err) : console.log('Check directory for details'));
}

addManager();


// .then((response) => {
//     // deconstruct response object in order to display information in readme file to be written
//     let {projectNameInput, projectLicense, mgrOfficeNum, commandLineInstallInput, instructProjectUsage, instructProjectContributions, commandLineTestInput, mgrName, mgrID} = response;
//     // fs writefile includes filename, file contents, and error handling/success message if write is successful 
//     fs.writeFile('README_output.md', `<p style='text-align: right;'><a href="#project-title">Back to Top</a></p>`, 
//     (err) => err ? console.error(err) : console.log('Check directory for details'))
// });


// Use writeFileSync method to use promises instead of a callback function

// // Bonus using writeFileSync as a promise
// const init = () => {
// 
//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// }