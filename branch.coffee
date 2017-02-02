class Branch
    constructor: (@parent, @pos, @dir) ->
        @origDir = @dir.copy()
        @count = 0
        @size = 8

    show: () ->
        fill(255)
        noStroke()
        ellipse(@pos.x, @pos.y, @size, @size)

    next: () ->
        pos = p5.Vector.add(@pos, @dir)
        newBranch = new Branch(@, pos, @dir.copy())
        newBranch.size = @size * 0.99

        return newBranch

    reset: () ->
        @dir = @origDir.copy()
        @count = 0
