//basic union
type Identify= string | number

const Id: Identify= "maruf";
const Id2: Identify= 783531;
console.log(Id, Id2);


// literal union : used when we want just fixed thing like roles

type Role ="user"| "admin"|"member";
const userRole :Role= "admin";
// const userRole2:Role = "contractor" // it will through error because the value are not in role
console.log(userRole);

//object union : used for object data there will be separate data in different object and we can only choose between them
interface Admin {
    id:string,
    role: string,
    badge:string
}
interface Member {
    id:string,
    role:string,
    plan:string[]
}

// union
type User =Admin |Member 

const user :User ={
id:"4455admin",
role: "admin",
plan:["free","paid"],
}
console.log(user);