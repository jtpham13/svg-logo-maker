const inquirer = require("inquirer");
const fs = require('fs');
const Circle = require("./lib/circle")
const Square = require("./lib/square")
const Triangle = require("./lib/triangle")



// User input questions
const logoQuestions = [
    {
   
    type: 'input',
    message: 'Enter a text up to 3 characters.',
    name: 'text',
    maxLength: 3,
},
{
    type: 'input',
    message: 'Pick a color for the text using keyboard or hexadecimal number.',
    name: "textColor",

},
{
    type: 'list',
    name: 'shape',
    message: 'Pick a shape from the list.',
    choices: [
        "circle",
        "triangle",
        "square",
    ],
},
{
    type: 'input',
    message: 'Pick the shape color using the keyboard or hexadecimal number.',
    name: 'shapeColor',
},
];

function generateLogo(text, textColor, shape, shapeColor) {
    let logo;
  
    if (shape === 'circle') {
      logo = new Circle();
    } else if (shape === 'triangle') {
      logo = new Triangle()
    } else if (shape === 'square') {
      logo = new Square()
    }
  
    logo.setText(text);
    logo.setTextColor(textColor);
    logo.setShapeColor(shapeColor);
  
    return logo.render();
  }

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  // Function to initialize the SVG logo maker app
function init() {
    console.log('logo maker');
    ;
  
    inquirer.prompt(logoQuestions).then((answers) => {
      const { text, textColor, shape, shapeColor } = answers;
      const svg = generateLogo(text, textColor, shape, shapeColor);
      const filename = 'logo.svg';
  
      writeToFile(filename, svg);
  
      console.log(`Generated ${filename}`);
    });
  }
  
  // Call the initialization function
  init();


  