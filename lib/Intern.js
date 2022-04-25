const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }

    //return github
    getSchool() {
        return this.school;

    }
    //—overridden to return 'Intern'
    // repeat the method, but tell it to do something different
    getRole() {
        return 'Intern';
    }

  }
  module.exports = Intern;