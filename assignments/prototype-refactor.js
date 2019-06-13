/* 
g
Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(info) {
//     this.createdAt = info.createdAt;
//     this.name = info.name;
//     this.dimensions = info.dimensions;
//   };

//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
//   };

class GameObject {
  constructor(info) {
    this.createdAt = info.createdAt;
    this.name = info.name;
    this.dimensions = info.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// function CharacterStats(info) {
//   GameObject.call(this, info);
//   this.healthPoints = info.healthPoints;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage`;
// };

class CharacterStats extends GameObject {
  constructor(info) {
    super(info);
    this.healthPoints = info.healthPoints;
    
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}

// function Humanoid(info) {
//   CharacterStats.call(this, info);
//   this.team = info.team;
//   this.weapons = info.weapons;
//   this.language = info.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// };

class Humanoid extends CharacterStats {
  constructor(info) {
    super(info);
    this.team = info.team;
    this.weapons = info.weapons;
    this.language = info.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

/////STRETCH////

// function Hero(info) {
//   Humanoid.call(this, info);
//   this.secretAbility = info.secretAbility;
//   this.hitPoints = info.hitPoints;
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.proclamation = function() {
//   return `I ${this.name} am here to save you!`;
// };

// Hero.prototype.hit = function() {
//   return `${this.name} has struck you ${this.hitPoints} damage`;
// };

// Villian.prototype.hitPoints = function(min, max) {
//   return Math.random() * (max - min) + min;
// };

class Hero extends CharacterStats {
  constructor(info) {
    super(info);
    this.secretAbility = info.secretAbility;
    this.hitPoints = info.hitPoints;
  };
  proclamation() {
    return `I ${this.name} am here to save you!`;
  };

  hit() {
    return `${this.name} has struck you ${this.hitPoints} damage`;
  };

  hitPoints(min, max) {
    return Math.random() * (max - min) + min;
  };
};

// function Villian(info) {
//   Humanoid.call(this, info);
//   this.secretPower = info.secretPower;
//   this.hitPoints = info.hitPoints;
// }

// Villian.prototype = Object.create(Humanoid.prototype);
// Villian.prototype.proclamation = function() {
//   return `I ${this.name} am here to get you!`;
// };

// Villian.prototype.hit = function() {
//   return `${this.name} has struck you ${villian.prototype.hitPoints()} damage`;
// };

// Villian.prototype.hitPoints = function(min, max) {
//   return Math.random() * (max - min) + min;
// };


class Villian extends CharacterStats {
    constructor(info) {
        super(info);
        this.secretPower = info.secretPower;
        this.hitPoints = info.hitPoints;
    }
    proclamation() {
          return `I ${this.name} am here to get you!`;
        };
        
        hit() {
          return `${this.name} has struck you ${villian.prototype.hitPoints()} damage`;
        };
        
        hitPoints(min, max) {
          return Math.random() * (max - min) + min;
        };

};




const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

/////STRETCH//////
const monster = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6
  },
  healthPoints: 50,
  team: "Mordor",
  weapons: ["Claws", "Sword"],
  language: ["Orc", "Elvish"]
});

const aragorn = new Hero({
  healthPoints: 40,
  dimensions: archer.dimensions,
  name: "Aragorn",
  team: "The Fellowship",
  weapons: ["Bow", "Sword"],
  secretAbility: "Army of Dead",
  language: ["Common Tongue", "Elvish"]
});

const sauron = new Villian({
  healthPoints: 100,
  dimensions: monster.dimensions,
  name: "Sauron",
  team: "Dark Power",
  weapons: ["The Ring", "Flail"],
  secretPower: "Mindcontrol",
  language: ["Common Tongue", "Orc", "Elvish"]
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(aragorn.proclamation());
console.log(aragorn.secretAbility);
console.log(aragorn.dimensions);
console.log(sauron);
// console.log(sauron.hitPoints());
// console.log(aragorn.hitPoints());

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
