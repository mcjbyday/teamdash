const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }

    //—overridden to return 'Manager'
    // repeat the method, but tell it to do something different
    getRole() {
        return 'Manager';
    }

  }
  module.exports = Manager;