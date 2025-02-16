"use strict";
// tuples
// let arr:[number,string] =[12,'oop']
//enums
// enum userRoles {
//     ADMIN = 'admin',
//     GUEST = 'guest'
// }
//any
// let a;
// a=10
// a='loop'
// a.toLowerCase();
// unknown
// let a :unknown;
// a=10
// a='loop'
// if (typeof a ==='string') a.toLowerCase();
//void
// function newbie():void {
// }
// null
// let a:null;
// undefined
// let a:undefined;
// console.log(typeof a); (for null and undefined)
//never
// function loop():never{
//     while(true){
//     }
// }
// loop();
// console.log('not printing')
// interface
// interface user{
//     name:string,
//     age:number,
//     gender?:string
// }
//haveing same name will merge the interface
// interface user{
//     gmail:string;
// }
//extends the user 
// interface newUser extends user{
//     place:string;
// }
// function abc(obj:newUser){
//     console.log(obj.age);
// }
// abc({gmail:'abc@gmail.com',name:'pope',age:20 ,place:'delhi'});
//type
//union
// type varchar = string|number|null; 
// let a:varchar = 90;
// type user = {
//     name:string,
//     age:varchar
// }
//intersection
// type admin = user & {
//     abc(newUser:string) :void
// }
// function make (obj :admin){
//     obj.abc('mop');
// }
// classes and objects
class user {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    get getname() {
        return this.name;
    }
    set setname(val) {
        this.name = val;
    }
}
class semiuser extends user {
    constructor(name, age, gender) {
        super(name, age, gender);
    }
    get getsemiuser() {
        return this.age;
    }
}
let u1 = new user('rock', 30, "m");
let su1 = new semiuser('popoye', 40);
console.log(u1.age);
console.log(u1.age);
