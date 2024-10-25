// BASIC TYPES

// let username:any;
// username=23;
// username="Name";

// let user: {
//     name:string;
//     id:number | string;
// } ;

//  user = {
// name:"max",
// id:2,
// };

// let hobbies: Array<string>;
// let hobbies: string[];

// hobbies = ["sport", "arie"];
// hobbies = [23, 2];

// ------------------------------------------

// function add(a: number, b: number): undefined | number | void {
function add(a: number, b: number) {
  const result = a + b;
  // console.log(result);
  return result;
}

function calculate(
  a: number,
  b: number,
  cal: (a: number, b: number) => number
) {
  cal(a, b);
}

calculate(2, 3, add);
