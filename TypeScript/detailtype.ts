// object types

let num1: { x: number, y: number } = { x: 1, y: 4 };


let num2: { x: number, y?: number } = { x: 1, y: 4 };  //optional property -> y can be or not be

//Type Alias -> Syntax similar to Interfaces || difference is u can redeclare interface but not type alias

type MyPoint = {
    x: number;
    y: number;
}

let p2: MyPoint = { x: 100, y: 100 };


//Union Types

let id: number | string = 2;   //can be no. or string








