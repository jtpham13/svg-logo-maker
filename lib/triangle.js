const Shapes = require("./shapes")
class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    render() {
      return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
  
        <polygon points="50 10 90 90 10 90" fill="${this.shapeColor}" />
  
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.text}</text>
  
      </svg>`;
    }
  }
  
  module.exports = Triangle;
  