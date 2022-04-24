const Employee = require("../lib/Employee");

// can instantiate instance
// can set name via constructur
// can set id via constructor
// can get name  via getName() 
// can get id via getID
// can get email via getEmail
// getRole() should return employee

describe("Employee", () => {
    describe('Initialization', () => {
        it("should set the values of name, id, and email, when those values are passed into the object", () => {
            // getName should return the name of the employee
            let nameStr = "Dr. Frank W. Gore, M.D., FAAC, ACS";
            let idVal = 5;
            let emailStr = "headhoncho@corp.com";
            const employee = new Employee(nameStr, idVal, emailStr);
            
            expect(employee.name).toEqual("Dr. Frank W. Gore, M.D., FAAC, ACS");
            expect(employee.id).toEqual(5);
            expect(employee.email).toEqual("headhoncho@corp.com");
        });
        
    });
    
    describe("getName", () => {
        it('should ', () => {
            
        });

    }); 

    describe("getId", () => {
        it('should ', () => {
            
        });
        // getName should return the name of the employee
        // arrange, act, assert
        // const strNomen = "Dr. Frank W. Gore, M.D., FAAC, ACS";
        // const employee1 = new Employee(strNomen, 5, 'binnys');
        // const result = employee1.name();
        
        // expect(result).toEqual(strNomen);
    });

    describe("getEmail", () => {
        it('should return an email address when getEmail method is called', () => {
            let nameStr = "Dr. Frank W. Gore, M.D., FAAC, ACS";
            let idVal = 5;
            let emailStr = "headhoncho@corp.com";
            const employee = new Employee(nameStr, idVal, emailStr);

            let empEmail = employee.getEmail();
            expect(empEmail).toEqual('headhoncho@corp.com');
        });
        
    });

    describe("getRole", () => {
        it('should return Employee when getRole method is called', () => {
            let nameStr = "Dr. Frank W. Gore, M.D., FAAC, ACS";
            let idVal = 5;
            let emailStr = "headhoncho@corp.com";
            const employee = new Employee(nameStr, idVal, emailStr);

            let empRole = employee.getRole();
            expect(empRole).toEqual('Employee');

        });
        
    });
});
