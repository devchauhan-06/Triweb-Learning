//A value can only occur once 

let newSet = new Set()

newSet.add(1)
newSet.add(2)
newSet.add(3)
newSet.add(4)
newSet.add(3)


console.log(newSet)

newSet.delete(4)

console.log(newSet)