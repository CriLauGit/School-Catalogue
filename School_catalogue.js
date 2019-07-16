class SchoolCatalog {
  constructor(level, schools) {
    this._level = level;
    this._schools = schools;
  }

  get level() {
    return this._level;
  }
  get schools() {
    return this._schools;
  }
  
  addSchool(school) {
    if(school.level === this.level) {
      this.schools.push(school);
    }
    else {
      console.log(`Cannot add ${school.name}, wrong level.`)
      }
    }
}

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  set numberOfStudents(value) {
    if(typeof(value) === 'number') {
      this._numberOfStudents = value;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
  return substituteTeachers[Math.floor(Math.random()*(substituteTeachers.length - 1))];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
  super(name,'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
  super(name, 'middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
  super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

const primarySchools = new SchoolCatalog('primary',[lorraineHansbury]);
console.log(primarySchools.schools[0].name);
const mihaiEminescu = new PrimarySchool('Mihai Eminescu', 614, 'Students must be picked up by a parent, guardian, or a family member over the age of 18.');
primarySchools.addSchool(mihaiEminescu);
console.log(primarySchools.schools);
primarySchools.addSchool(alSmith);
