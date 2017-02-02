var Branch;

Branch = (function() {
  function Branch(parent, pos1, dir) {
    this.parent = parent;
    this.pos = pos1;
    this.dir = dir;
    this.origDir = this.dir.copy();
    this.count = 0;
    this.size = 8;
  }

  Branch.prototype.show = function() {
    fill(255);
    noStroke();
    return ellipse(this.pos.x, this.pos.y, this.size, this.size);
  };

  Branch.prototype.next = function() {
    var newBranch, pos;
    pos = p5.Vector.add(this.pos, this.dir);
    newBranch = new Branch(this, pos, this.dir.copy());
    newBranch.size = this.size * 0.99;
    return newBranch;
  };

  Branch.prototype.reset = function() {
    this.dir = this.origDir.copy();
    return this.count = 0;
  };

  return Branch;

})();
