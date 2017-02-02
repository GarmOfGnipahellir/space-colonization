var Tree;

Tree = (function() {
  function Tree() {
    var current, d, dir, found, i, j, k, leaf, len, pos, ref;
    this.lastLeafDeath = 0;
    this.leaves = [];
    for (i = j = 0; j < 1000; i = ++j) {
      this.leaves.push(new Leaf());
    }
    pos = createVector(width / 2, height / 2);
    dir = createVector(0, -1).mult(grow_dist);
    current = new Branch(null, pos, dir);
    this.branches = [current];
    found = false;
    while (!found) {
      ref = this.leaves;
      for (k = 0, len = ref.length; k < len; k++) {
        leaf = ref[k];
        d = p5.Vector.dist(current.pos, leaf.pos);
        if (d < max_dist) {
          found = true;
        }
      }
      if (!found) {
        current = current.next();
        this.branches.push(current);
      }
    }
  }

  Tree.prototype.show = function() {
    var branch, j, len, ref, results;
    ref = this.branches;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      branch = ref[j];
      results.push(branch.show());
    }
    return results;
  };

  Tree.prototype.grow = function() {
    var branch, closest, d, dir, i, j, k, l, leaf, len, len1, m, record, ref, ref1, ref2, ref3, results;
    ref = this.leaves;
    for (j = 0, len = ref.length; j < len; j++) {
      leaf = ref[j];
      closest = null;
      record = width + height;
      ref1 = this.branches;
      for (k = 0, len1 = ref1.length; k < len1; k++) {
        branch = ref1[k];
        d = p5.Vector.dist(leaf.pos, branch.pos);
        if (d < min_dist) {
          leaf.reached = true;
          closest = null;
          break;
        } else if (d > max_dist) {

        } else if (closest === null || d < record) {
          closest = branch;
          record = d;
        }
      }
      if (closest !== null) {
        dir = p5.Vector.sub(leaf.pos, closest.pos);
        dir.normalize();
        closest.dir.add(dir);
        closest.count++;
      }
    }
    for (i = l = ref2 = this.leaves.length - 1; ref2 <= -1 ? l < -1 : l > -1; i = ref2 <= -1 ? ++l : --l) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1);
        this.lastLeafDeath = frame;
      }
    }
    results = [];
    for (i = m = ref3 = this.branches.length - 1; ref3 <= -1 ? m < -1 : m > -1; i = ref3 <= -1 ? ++m : --m) {
      branch = this.branches[i];
      if (branch.count > 0) {
        branch.dir.div(branch.count).normalize().mult(grow_dist);
        this.branches.push(branch.next());
      }
      results.push(branch.reset());
    }
    return results;
  };

  return Tree;

})();
