max_dist = 64
min_dist = 8
grow_dist = 1

frame = 0
tree = undefined

setup = () ->
    frameRate(60)
    createCanvas(512, 512)

    tree = new Tree()


draw = () ->
    frame++
    background(0)
    tree.show()
    if (frame - tree.lastLeafDeath < 10)
        tree.grow()
