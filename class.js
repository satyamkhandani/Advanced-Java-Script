//             CLASS
// this development reduced 

// class ClassName{
//   constructor(prop1,prop2){
//     this.prop1=prop1;
//     this.prop2=prop2;

//   }
// }

// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);


// this keyword refers to the object it belongs 







// class Dog{

//   constructor(dogName , weight ,colour,breed){
//     this.dogName=dogName;
//     this.weight=weight;
//     this.colour=colour;
//     this.breed=breed;
//   }
// }

// let dog =new Dog("JavaScript",2.4,"brown","chihuahua");

// console.log(dog.dogName , "is a" ,);





// CLAss     it is a convention to start a class name with a capital letter

// class Person{
//   constructor(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;

//   }
// }
// let p=new Person("Maaike");

// console.log("hi",p.firstname,p.lastname);





//  default argument
// class Person{
//   constructor(firstname,lastname="doe"){
//     this.firstname=firstname;
//     this.lastname=lastname;

//   }
// }

// let p=new Person("Maaike");

// console.log("hi",p.firstname,p.lastname);





//          Method

// use dont use function keyword

// class Person{
//   constructor(firstname,lastname="doe"){
//     this.firstname=firstname;
//     this.lastname=lastname;

//   }

//   greet (){
//     console.log("Hi there !",this.firstname);
//   }
// }


// let p=new Person("Maaike", "van putten");
// p.greet();





// class Person{
//   constructor(firstname,lastname="doe"){
//     this.firstname=firstname;
//     this.lastname=lastname;

//   }

//   greet (){
//     console.log("Hi there !",this.firstname);
//   }

//   compliment(name,object){
//     return "This is wonderful" +object+ ","+name;
//   }
// }


// let p=new Person("Maaike", "van putten");
// p.greet();
// let compliment =p.compliment("Harry","hat");
// console.log(compliment);





// private firstname

// class Person {
//   #firstname;
//   #lastname;

//   constructor(firstname,lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
//   }

// }

// let p=new Person("Maaike", "van putten");
// console.log(p.firstname);







// class Person {
//   #firstname;
//   #lastname;

//   constructor(firstname,lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
//   }

// }






//  Getters AND Setters


// class Person {
//   #firstname;
//   #lastname;

//   constructor(firstname,lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
//   }

//   get firstname(){
//     return this.#firstname;
//   }

//   set firstname(firstname){
//     this.#firstname=firstname;

//   }

//   get lastname(){
//     return this.#lastname;
//   }

//   set lastname(lastname){
//     this.#lastname=lastname;
//   }
  
// }

// let p=new Person("Maaike", "van putten");
// console.log(p.lastname);



