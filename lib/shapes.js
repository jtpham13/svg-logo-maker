class Shapes {
    constructor(text,textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }

    setText(text){this.text = text}
    setTextColor(textColor){this.textColor = textColor}
    setShapeColor(shapeColor){this.shapeColor = shapeColor}

}

module.exports = Shapes