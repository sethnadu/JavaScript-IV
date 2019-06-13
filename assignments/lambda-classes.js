// CODE here for your Lambda Classes

///////////////////////base-class
class Person {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${name.location}.`;
  }
}

///////////////////////child of base-class
class Instructor extends Person {
  constructor(attributesInstructor) {
    super(attributes);
    this.specialty = attributesInstructor.specialty;
    this.favLanguage = attributesInstructor.favLanguage;
    this.catchPhrase = attributesInstructor.catchPhrase;
    
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(subject) {
    return `${this.name} recieves a perfect score on ${subject}.`;
  }
}
//////////////////////////child of base-class

class Student extends Person {
  constructor(attributesStudent) {
    super(attributes);
    this.previousBackground = attributesStudent.previousBackground;
    this.className = attributesStudent.className;
    this.favSubjects = attributesStudent.favSubjects;
   
  }
  listSubjects() {
    return this.favSubjects.call(...favSubjects);
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject} `;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

//////////////////////////grandchild of child(Instructor)

class ProjectManager extends Instructors {
  constructor(attributesProjectManager) {
    super(attributesInstructor);
    this.gradClassName = attributesProjectManager.gradClassName;
    this.favInstructor = attributesProjectManager.favInstructor;
    
  }
  standUp(slackChannel) {
    `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(studentName, subject) {
    `${this.name} debugs ${studentName}'s code on ${subject}.`;
  }
}

////////////////////////////////////////////Objects//////////////

////Instructors/////

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


console.log()