const Circle = require('../lib/circle');
// const square = require('../lib/square');
// const triangle = require('../lib/triangle');

test('testing I can set text in my circle', () => {
    let shape = new Circle()
    shape.setText("svg")
    expect(shape.text).toBe("svg");
  });
test('testing I can set text Color in my circle', () => {
    let shape = new Circle()
    shape.setTextColor("red")
    expect(shape.textColor).toBe("red");
  });
test('testing I can set shape Color in my circle', () => {
    let shape = new Circle()
    shape.setShapeColor("green")
    expect(shape.shapeColor).toBe("green");
  });