let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let newArr = []

// arr.map((elem, index) => newArr[index] = elem * elem)
//----------------OR----------------------
newArr = arr.map((elem) => elem * elem)


console.log(newArr);