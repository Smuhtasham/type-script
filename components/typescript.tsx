// BASIC TYPES

// import { Props } from "next/script";
// import { ComponentPropsWithoutRef, ElementType } from "react";

// import { useState } from "react";
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
// function add(a: number, b: number) {
//   const result = a + b;
//   // console.log(result);
//   return result;
// }

// type CalFn = (a: number, b: number) => number;

// function calculate(
//   a: number,
//   b: number,
//   cal: CalFn
// ) {
//   cal(a, b);
// }

// calculate(2, 3, add);

// let role: 'admin' | 'user' | 'editor';
// role='hello'

// type DataStorage<T> = {
//   storage:T[],
//   add : (data: T) => T[];
// }

// const textStorage:DataStorage<string> ={
//   storage:[],
//   add(data) {
//     this.storage.push(data);
//   }
// }

// const UserStorage: DataStorage<User> ={
//   storage:[],
//   add(user){

//   }
// }
// type CourseGoal = {
//   title:string;
//   description:string;
//   id:number;
// }

// const [goals , setGoals] = useState<CourseGoal[]>([]);

// type Container<T extends ElementType> = {
//   as: T;
//   children:React.ReactNode;
// } & ComponentPropsWithoutRef<T>  ;

// export default function Container<C extends ElementType>({ as,children,...props }: Container<C>) {
//   const Component = as || 'div';
//   return <Component {...props}>{children}</Component>;
// }
