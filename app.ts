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
{
    // intersection vs types
// 1. only intersection can extends
// 2. can no use multiple type of same name
// 3. in intersection we cannt use type union or intersection 
}
// function make (obj :admin){
//     obj.abc('mop');
// }

// classes and objects

// class user{
//     private name;
//     public readonly age;
//     protected gender;
    
//     static version = '10.0.1';

//      constructor(name:string,age :number,gender?:string){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//      }
//       get getname(){
//         return this.name;
//       }
//       set setname(val:string){
//         this.name = val;
//       }

// }
// class semiuser extends user{
//     constructor(name:string, age:number, gender?:string){
//         super(name,age,gender);
//     }
//     get getsemiuser(){
//         return this.age;
//     }
// }
// let u1 = new user('rock',30,"m");
// let su1 = new semiuser('popoye',40);

// console.log(u1.age);
// console.log(su1.age);
// console.log(user.version);

//call-back function

// function abc (name:string, call : (val:string)=>void){
//     call('dawg');
// }
// abc('joseph',(val:string)=>{
//     console.log(val);
// })

//rest 
// function abc(...args : number[]) { }

// abc(1,2,3,4,5,6,7,8);

//generics

// function
// function abc<T>(a:<T>,b:number){
// }
// interface
// interface user<T>{
//     name:T;
//     age:number;
// }
// function abc(a:user<string>){
//     console.log(a);
// }
// abc({name:"sam",age:12});

//class
// class user<T>{
//     constructor(a:T,b:string){
//         console.log(typeof a);
//     }
// }
// let u1 = new user(1001,"ram");

//edge case (cannot return string as it can ce of any type rather than string)
function ab<T>(a:T,b:T):T{
    console.log(a);
    return <T>"bob";
    return "bob" as T;
    return "bob" as unknown as T;
}
console.log( ab<number>(1,2));





