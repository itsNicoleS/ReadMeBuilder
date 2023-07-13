// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: "q1",
    message: 'What is your Name? (and what is your Quest?) '
},
{
    type: 'input',
    name: 'q2',
    message: "What is the Title of your project?" 
},
{
    type: 'input',
    name: 'q3',
    message: "Desription of project:", //Description
},
{
    type: 'input',
    name: 'q4',
    message: "what is the air-speed velocity of an unladen swallow?",
},
{
    type: 'input',
    name: 'q5',
    message: "Does this come with any installs? Please to provide Instructions", // Installation
},
{
    type: 'input',
    name: 'q6',
    message: "Want to Credit anything/anyone else?", //Credits 
},
{
    type: 'input',
    name: 'q7',
    message: "Testing Instructions?", //Tests
},
{
    type: 'input',
    name: 'q8',
    message: "Are we having fun yet? Provide instructions and examples for use.", //Usage 
},
{
    type: 'list',
    name: 'q9',
    message: "choose Liscence:",
    choices: ["MIT", "Option2", "Option3"] //Liscence (w/fucking descriptors?? )
},
{
    type: 'input',
    name: 'q10',
    message: "What is your electronic mailing address?"
},
{
    type: 'input',
    name: 'q11',
    message: "What is your GitHub Username? (to add a link to GH)"
},]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    //when your function gets called...
    //fileName will have whatever value you passed in as the first parameter
    //and data will have whaterver you passed in on the 2nd
    //it doesn't matter what their names were before
    //and it doesn't matter in here what their names were before

 }

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
    .then((answers) => {
       
       var rm = "# " + answer.q2 + "\r\n\r\n";

       rm+= "## Description\r\n\r\n";
        rm += answer.q3 + "\r\n";

        rm+= "## Installation\r\n\r\n";
        rm+= answer.q5 + "\r\n";

        rm+= "## Usage\r\n\r\n";
        rm+= answer.q8 + "\r\n";

        rm+= "## Credits\r\n\r\n";
        rm+= answer.q6 + "\r\n";

        rm+= "## License\r\n\r\n";
        rm+= answer.q9 + "\r\n";
        
        rm+= "## Tests\r\n\r\n";
        rm+= answer.q7 + "\r\n";
writeToFile ("README.md", rm); 
    })

        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
    
}
 

// Function call to initialize app
init();
