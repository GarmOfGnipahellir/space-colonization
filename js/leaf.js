var Leaf;

Leaf = (function() {
  function Leaf() {
    this.pos = createVector(random(width), random(height));
    this.reached = false;
  }

  Leaf.prototype.show = function() {
    fill(255, 0, 0);
    noStroke();
    return ellipse(this.pos.x, this.pos.y, 4, 4);
  };

  return Leaf;

})();
