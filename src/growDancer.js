var GrowDancer = function (top, left, timeBetweenSteps) {
  this.state = 'small';
  Dancer.call(this, top, left, 1000);
}

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;

GrowDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  if (this.state === 'small') {
    this.$node.animate({
      height : "1%"
    }, this.timeBetweenSteps);
    this.state = 'large';
    return;
  }

  if (this.state == 'large') {
    this.$node.animate({
      height : "0%"
    }, this.timeBetweenSteps);
    this.state = 'small';
    return;
  }
}