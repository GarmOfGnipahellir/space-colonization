var draw, frame, grow_dist, max_dist, min_dist, setup, tree;

max_dist = 64;

min_dist = 8;

grow_dist = 1;

frame = 0;

tree = void 0;

setup = function() {
  frameRate(60);
  createCanvas(512, 512);
  return tree = new Tree();
};

draw = function() {
  frame++;
  background(0);
  tree.show();
  if (frame - tree.lastLeafDeath < 10) {
    return tree.grow();
  }
};
