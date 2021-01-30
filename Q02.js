/**
 * ===================================
 * -------- Question 01/Q2-------------
 * ===================================
 */
class MyObject {
   constructor(name, message) {
      this.name = name;
      this.message = message;

   }
   get Name() {
      return this.name;
   }
   get Message() {
      return this.message;
   }
   toString() {
      return `Object Name Is : ${this.name} Object Message IS ${this.message} `;
   };
}

const clone1 = new MyObject('Sam', 'Hello Dude :)....');
console.log(clone1.toString());
console.log(clone1.Message);
console.log(clone1.Name);

// -------------------------------------------------------------------




/**
 * ===================================
 * -------- Question 02/Q2-------------
 * ===================================
 */

class Person {
   constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
   }

   DisplayInfo() {
      return `Person Name : ${this.name} Person Age : ${this.age} Person Address : ${this.address}`;
   }
}

const bio = new Person('Mohamed', 26, 'Cairo');
console.log(bio.DisplayInfo());