// CODE here for your Lambda Classes

///////////////////////base-class
class Person {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

///////////////////////child of base-class
class Instructor extends Person {
  constructor(attributesInstructor) {
    super(attributesInstructor);
    this.specialty = attributesInstructor.specialty;
    this.favLanguage = attributesInstructor.favLanguage;
    this.catchPhrase = attributesInstructor.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(Student, subject) {
    return `${Student} recieves a perfect score on ${subject}.`;
  }
  ///only has a change of grade +-10 randomly
  randomGradeTenDiff(Student) {
    return Student + Math.floor(Math.random() * (1 + 10 - 30)) + 10;
  }

  ///can change grade from 0 to 100 randomly
  randomGrade0to100(Student) {
    return Student + Math.floor(Math.random() * (1 + 0 - 100) + 20);
  }
}
//////////////////////////child of base-class

class Student extends Person {
  constructor(attributesStudent) {
    super(attributesStudent);
    this.previousBackground = attributesStudent.previousBackground;
    this.className = attributesStudent.className;
    this.favSubjects = attributesStudent.favSubjects;
    this.grade = attributesStudent.grade;
  }
  listSubjects() {
    return `${this.favSubjects}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject} `;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

//////////////////////////grandchild of child(Instructor)

class ProjectManager extends Instructor {
  constructor(attributesProjectManager) {
    super(attributesProjectManager);
    this.gradClassName = attributesProjectManager.gradClassName;
    this.favInstructor = attributesProjectManager.favInstructor;
  }
  standUp(slackChannel) {
    `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(Student, subject) {
    `${this.name} debugs ${Student}'s code on ${subject}.`;
  }
}

////////////////////////////////////////////Objects//////////////

////Instructors/////

const liam = new Instructor({
  name: "Liam Neeson",
  age: "undetermind",
  locaton: "Everywhere",
  specialty: "Unusual Skills",
  favLanguage: "I speak every language that exists",
  catchPhrase:
    "If you're looking for ransom, I can tell you I don't have money but what I do have are a very particular set of skills. Skills I have acquired over a very long career. Skills that make me a nightmare for people like you."
});

const dan = new Instructor({
  name: "Dan",
  age: "Infinity",
  location: "Denver",
  specialty: "Relentless Debugger",
  favLanguage:
    "JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia",
  catchPhrase: "If you can do the thing, you can get paid to do the thing!"
});

////Project Managers//////

const waterboy = new ProjectManager({
  name: "Bobby Boucher ",
  age: "At least 30",
  gradClassName: "Waterboy",
  favInstructor: "Coach Klein",
  location: "Louisiana",
  specialty: "Hydration",
  favLanguage: "H20",
  catchPhrase: "My Mama says"
});

const marguel = new ProjectManager({
  name: "Marguel",
  age: "Maybe 26",
  gradClassName: "WEBPT2",
  favInstructor: "Me?",
  location: "California",
  specialty: "React",
  favLanguage: "JavaScript, Python, Elm etc.",
  catchPhrase: "Practice Flex Zombies !!!"
});

const brandon = new ProjectManager({
  name: "Brandon",
  age: "34",
  gradClassName: "WEB18",
  favInstructor: "Professor Lambda",
  location: "Maine",
  specialty: "Redux",
  favLanguage: "JavaScript, C++, Python.",
  catchPhrase: "You shall not pass!"
});

////Students/////

const seth = new Student({
  name: "Seth",
  age: 24,
  location: "Lancaster, PA",
  previousBackground: "Computer Technician",
  className: "Web21",
  favSubjects: ["Computer Science, History, Mythology"],
  grade: 80 //Math.floor(Math.random() * Math.floor(100))
});

const nisa = new Student({
  name: "Nisa",
  age: 25,
  location: "Ohio",
  previousBackground: "Debt Collector",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: "Web21",
  favSubjects: ["Computer Science", "Philosophy", "English"]
});

////////CODE TESTING//////////////////////////////

///Person code testing///
console.log(seth.speak());

console.log(dan.speak());

///Instructor code testing///

console.log(dan);
console.log(dan.demo("Javascript"));
console.log(dan.grade(nisa.name, "Javascript"));

console.log(liam);
console.log(liam.demo("Self-Defence"));
console.log(liam.catchPhrase);
console.log(liam.grade(seth.name, "Self-defence"));

///Student code testing///
console.log(seth);
console.log(seth.listSubjects());
console.log(seth.PRAssignment("JavaScript-IV"));
console.log(seth.sprintChallenge("JavaScript Fundamentals"));

console.log(nisa);
console.log(nisa.listSubjects());
console.log(nisa.PRAssignment("Html"));
console.log(nisa.sprintChallenge("HTML"));

///Project Manager code testing///

console.log(marguel);
console.log(marguel.speak());
console.log(marguel.demo("JavaScript III"));
console.log(marguel.grade(seth.name, "JavaScript"));

console.log(waterboy);
console.log(waterboy.speak());
console.log(waterboy.demo("Fooseball"));
console.log(waterboy.catchPhrase);

///////STRETCH//////
console.log(seth.grade);
console.log(dan.randomGradeTenDiff(seth.grade));
console.log(dan.randomGrade0to100(seth.grade));
