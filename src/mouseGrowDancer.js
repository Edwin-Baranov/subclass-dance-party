//THIS CURRENTLY DOES NOT WORK

var MouseGrowDancer = function(top, left, timeBetweenSteps) {
  this.mouse = false;
  var ref = this;

  GrowDancer.call(this, top, left, timeBetweenSteps);
  // this.onMouseOver = function() {
  //   console.log('mouseOut running, This is:', this);
  //   this.mouse = true;
  // }
  // this.onMouseOut = function() {
  //   console.log('mouseOut running, This is:', this);
  //   this.mouse = false;
  // }
  // this.$node.on('mouseover', this.onMouseOver);
  // this.$node.on('mouseOut', this.onMouseOut);

  this.$node.mouseover(function() {
    ref.mouse = true;
  });

  this.$node.mouseout(function() {
    ref.mouse = false;
  });
}

MouseGrowDancer.prototype = Object.create(GrowDancer.prototype);
MouseGrowDancer.prototype.constructor = MouseGrowDancer;

MouseGrowDancer.prototype.step = function() {
  console.log('Running Step, Mouse is:', this.mouse);
  GrowDancer.prototype.step.call(this);
  if (this.mouse) {
    Dancer.prototype.step.call(this)
  }
  else {
    GrowDancer.prototype.step.call(this);
  }
}