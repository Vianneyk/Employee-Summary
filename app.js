const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const team = []

function startTeamCreation() {

    function addManager() {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
        ]).then(managerDetails => {
            const manager = new Manager(managerDetails.name, managerDetails.id, managerDetails.email, managerDetails.officeNumber)
            team.push(manager);
            selectNextTeamMember()
        })
    }

    function selectNextTeamMember() {
        inquirer.prompt([{
            type: "list",
            name: "nextMember",
            message: "What is the role of the next team member?",
            choices: ["engineer", "intern", "none"]
        }]).then(nextMember => {
            if (nextMember.nextMember === "engineer") {
                addNewEngineer()
            } else if (nextMember.nextMember === "intern") {
                addNewIntern()
            } else {
                createHtml()
            }
        })
    }


    function addNewEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?"
        }
        ]).then(engineerDetails => {
            const engineer = new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.github)
            team.push(engineer);
            selectNextTeamMember()
        })
    }
    function addNewIntern() {
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's chool?"
        }
        ]).then(internDetails => {
            const intern = new Intern(internDetails.name, internDetails.id, internDetails.email, internDetails.school)
            team.push(intern);
            selectNextTeamMember()
        })
    }

    function createHtml() {
        if (fs.existsSync(OUTPUT_DIR) === false){
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(team))
    }

    addManager();
}

startTeamCreation()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
