class Tree
    constructor: () ->
        @lastLeafDeath = 0
        @leaves = []
        for i in [0...1000]
            @leaves.push(new Leaf())

        pos = createVector(width/2, height/2)
        dir = createVector(0, -1).mult(grow_dist)
        current = new Branch(null, pos, dir)
        @branches = [current]

        found = false
        while !found
            for leaf in @leaves
                d = p5.Vector.dist(current.pos, leaf.pos)
                if (d < max_dist)
                    found = true

            if !found
                current = current.next()
                @branches.push(current)

    show: () ->
        #for leaf in @leaves
        #    leaf.show()
        for branch in @branches
            branch.show()

    grow: () ->
        for leaf in @leaves
            closest = null
            record = width + height
            for branch in @branches
                d = p5.Vector.dist(leaf.pos, branch.pos)
                if d < min_dist
                    leaf.reached = true
                    closest = null
                    break;
                else if d > max_dist
                else if closest == null || d < record
                    closest = branch
                    record = d

            if closest != null
                dir = p5.Vector.sub(leaf.pos, closest.pos)
                dir.normalize()
                closest.dir.add(dir)
                closest.count++

        for i in [@leaves.length - 1...-1]
            if @leaves[i].reached
                @leaves.splice(i, 1)
                @lastLeafDeath = frame

        for i in [@branches.length - 1...-1]
            branch = @branches[i]
            if branch.count > 0
                branch.dir.div(branch.count).normalize().mult(grow_dist)
                @branches.push(branch.next())
            branch.reset()
