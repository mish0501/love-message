// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/QHEQuoIKgNE

function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 2;
  this.growing = true;

  this.grow = function() {
    if (this.growing) {
      this.r += 0.75;
    }
  }

  this.show = function(color) {
    stroke(color[0], color[1], color[2]);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.edges = function() {
    return (this.x + this.r >= width || this.x - this.r <= 0 || this.y + this.r >= height || this.y - this.r <= 0)
  }
}
