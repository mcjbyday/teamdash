const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github
    }

    //return github
    getGithub() {
        return this.github;

    }

    //—overridden to return 'Engineer'
    // repeat the method, but tell it to do something different
    getRole() {
        return 'Engineer';
    }

  }
  module.exports = Engineer;