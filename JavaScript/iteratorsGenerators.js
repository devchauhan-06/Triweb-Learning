console.log("---------------ITERATOR----------------")

function range(start =0 , end = Infinity , step = 1)
{
    let nextindex = start;
    let count = 0;

    const rangeIterator = {
        next : function() {
            let result ;
            if(nextindex < end) {
                result = {value : nextindex , done : false}
                nextindex += step;
                count++;
                return result;
            }
            return { value : count , done : true}
        }
    };
    return rangeIterator;
}

const ranger = range(0,10)
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());
console.log(ranger.next());



console.log("---------------GENERATOR----------------")
//Generator function with *
 
function * genRange ( start = 0 , end =100 , step =1) {
    let counter =0;
    for (let i=start ; i<end ; i+=step)
    {counter++;
yield i;}

return counter;
}

const mygen = genRange(0,5);
console.log(mygen.next());
console.log(mygen.next());
console.log(mygen.next());
console.log(mygen.next());
console.log(mygen.next());
console.log(mygen.next());

