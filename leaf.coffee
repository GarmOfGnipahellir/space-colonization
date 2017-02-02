class Leaf
    constructor: () ->
        @pos = createVector(random(width), random(height))
        @reached = false

    show: () ->
        fill(255, 0, 0)
        noStroke()
        ellipse(@pos.x, @pos.y, 4, 4)
