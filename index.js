// to do store inputs from inquirer into an object
let fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { default: generateEmptyCoverage } = require('@jest/reporters/build/generateEmptyCoverage');

// onstart
// enter the team manager’s name, employee ID, email address, and office number
// OPTIONALLY
// add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const setSTART = () => {
    return inquirer.prompt([
        type: 'input',
        message: "START TEST 1",
        name: 'startTEST',
    ])
    .then(() => {
        setOPTION();
    }
    )
}

const setOPTION = () => {
    return inquirer.prompt([
        {
        type: 'list',
        message: "PICK ONE OPTION",
        name: 'OPTIONSELECTION',
        editableList: false,
        choices: ['option1', 'option2','endME'],
        }
    ])
    .then((optionRESPONSE) => {
        let {selection} = optionRESPONSE;
        if (selection == 'option1') {
            doOption1Once();
        }
        else if (selection == 'option2') {
            doOption2Once();
        }
        else {
            makePage();
        }
}

const doOption1Once = () => {
    return inquirer.prompt([
        {
        type: 'input',
        message: "for OPTION1",
        name: 'option1details',
        }
    ])
}



// const setManager = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             message: "What is your team manager's name?",
//             name: 'teamManagerName',
//         },
//         {
//             type: 'input',
//             message: 'What is their employee ID?',
//             name: 'teamManagerID',
//         },
//         {
//             type: 'input',
//             message: 'What is their email address?',
//             name: 'teamManagerEmail',
//         },
//         {
//             type: 'input',
//             message: "What is their office number?",
//             name: 'teamManagerOffice',
//         }])
//     }

// const completeTeam = () => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             message: "Would you like to add an additional team member?",
//             name: 'teamMateType',
//             editableList: false,
//             choices: [
                    //     'Engineer',
                    //     'Intern',
                    //     "I'm done adding team members",
                    // ],
//         }])
//         .then((responseAddTeamMember) => {
//             let {teamMateType} = responseAddTeamMember;
//             if (teamMateType == 'Engineer') {
//                 addEngineer();
//             }
//             else if (teamMateType == 'Intern') {
//                 addIntern();
//             }
//             else {
//                 makePage();
//             }
//         })
//     }

// const addEngineer = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             message: "What is the engineer team member's name?",
//             name: 'engineerName',
//         },
//         {
//             type: 'input',
//             message: 'What is their employee ID?',
//             name: 'engineerID',
//         },
//         {
//             type: 'input',
//             message: 'What is their email address?',
//             name: 'engineerEmail',
//         },
//         {
//             type: 'input',
//             message: "What is their github?",
//             name: 'engineerGithub',
//         }])
//         .then((responseAddEng) => {
//             completeTeam();
//         }
            
// }

    
// .then((response) => {
//     // deconstruct response object in order to display information in readme file to be written
//     let {projectNameInput, projectLicense, teamManagerOffice, commandLineInstallInput, instructProjectUsage, instructProjectContributions, commandLineTestInput, teamManagerName, teamManagerID} = response;
//     // fs writefile includes filename, file contents, and error handling/success message if write is successful 
//     fs.writeFile('README_output.md', `<p style='text-align: right;'><a href="#project-title">Back to Top</a></p>`, 
//     (err) => err ? console.error(err) : console.log('Check directory for details'))
// });


// Use writeFileSync method to use promises instead of a callback function

// const promptUser = () => {
//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'linkedin',
//         message: 'Enter your LinkedIn URL.',
//       },
//     ]);
//   };
  
// const generateHTML = ({ name, location, github, linkedin }) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta http-equiv="X-UA-Compatible" content="ie=edge">
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
// <title>Document</title>
// </head>
// <body>
// <div class="jumbotron jumbotron-fluid">
// <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//     <li class="list-group-item">My GitHub username is ${github}</li>
//     <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
// </div>
// </div>
// </body>
// </html>`;

// // Bonus using writeFileSync as a promise
// const init = () => {
// setManager()
//     .then((responseManager) => {
//         let {teamManagerOffice, teamManagerName, teamManagerEmail, teamManagerID} = responseManager;
//         addNewMember();
//     })
//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();