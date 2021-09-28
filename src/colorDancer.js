var ColorDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

//ColorDancer inherits from dancer
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

//Job of color dancer is to change it's own color
//For every step it will apply a random color to itself
ColorDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //new color
  //change this.$node to new color;
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  this.$node.css('border-color', newColor);
  // this.$node.style.color
}
//Maybe for some extra complexity have it liniarly go to new color until new color is reached

