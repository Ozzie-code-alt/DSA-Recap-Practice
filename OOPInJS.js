//

class Person {
  //when we instantiate our object this constructor runs soo this is mandatory
  constructor(name, age) {
    //person will receive name and age - this makes like add new instances
    this.name = name; //this is basically how we make our variable accessiable thoughout our code
    this.age = age;
  }

  // call this functions whenever you want to access data
  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}
//new means new instance or new Version of our Person class
let Person1 = new Person('Jsutin', 90);
let Person2 = new Person('Miguel', 90);

// console.log(Person1.getName());
// console.log(Person2.getName());

class House {
  constructor(address, price, residence) {
    this.address = address;
    this.price = price;
    this.residence = residence;
  }

  getAddress = () => {
    return this.address;
  };

  getPrice = () => {
    return this.price;
  };

  getResidence = () => {
    return this.residence;
  };
}

let Pedro = new Person('Pedro', 19);
let David = new Person('David', 20);

let house = new House('address', 90000, [Pedro, David]);

console.log(house.getResidence());
