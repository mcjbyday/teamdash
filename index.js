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
                let fullTeam = buildCards();
                myWriteFunction(fullTeam);
            }
        })
    }
// function writes full HTML document to a file 
function myWriteFunction(allCards) {
    // use global array and generate the doc using boilerplate card HTML with template literals
    fs.writeFile('./dist/teamdash.html',
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Dash</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="./assets/style.css" rel="stylesheet" >
</head>
<body>
    <header class="main_header bg-dark text-white">The Kids</header>
    <section class="main_container">${allCards}</section>
</body>
</html>`, 
    (err) => err ? console.error(err) : console.log('Check directory for details'));
}

// set aside icon src addresses for reference based on role
let myIconsSRC = [
    "./assets/person-harassing-solid.svg", 
    "./assets/baby-carriage-solid.svg", 
    "./assets/gem-solid.svg" 
];

// function assembles the card components for use in the HTML document 
function buildCards() {
    let myTeamCards = ``;
    let myIcon = ``;
    let mySpecialInfo = ``;

    for (i = 0; i < myGlobalPeople.length; i++) {
        
        if (myGlobalPeople[i].getRole() == 'Manager') {
            myIcon = myIconsSRC[0];
            mySpecialInfo = `Office number: ${myGlobalPeople[i].officeNumber}`;
        }
        else if (myGlobalPeople[i].getRole() == 'Intern') {
            myIcon = myIconsSRC[1];
            mySpecialInfo = `School: ${myGlobalPeople[i].school}`;
        }
        else if (myGlobalPeople[i].getRole() == 'Engineer') {
            myIcon = myIconsSRC[2];
            mySpecialInfo = `GitHub: <span><a href="https://github.com/${myGlobalPeople[i].github}" target="_blank">${myGlobalPeople[i].github}</a></span>`;
        }
        myTeamCards += `<div class="card bg-primary text-white .col-6 .col-sm-6 .col-md-6 .col-lg-6 .col-xl-6 .col-xxl-6" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title name_spot">${myGlobalPeople[i].name}</h5>
            <p class="card-text"><span><img class='icon' src="${myIcon}" style="height: 1em; filter: invert(1); margin: 0px 10px 0px 0px;"></span><spanc class="role_span">${myGlobalPeople[i].getRole()}</span></p>
        </div>
        <ul class="list-group">
            <li class="list-group-item bg-light.bg-gradient">ID: ${myGlobalPeople[i].id}</li>
            <li class="list-group-item bg-light.bg-gradient">Email: <span><a href ="mailto:${myGlobalPeople[i].email}">${myGlobalPeople[i].email}</a></span> </li>
            <li class="list-group-item bg-light.bg-gradient">${mySpecialInfo}</li>
        </ul>
    </div>`
    }
    return myTeamCards;
}


addManager();