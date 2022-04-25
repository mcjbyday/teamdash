const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe('Initialization', () => {
        it("should set the values of name, id, and email, when those values are passed into the object", () => {
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
        it("should return a name when getName method is called", () => {
            // getName should return the name of the employee
            let nameStr = "Dr. Frank W. Gore, M.D., FAAC, ACS";
            let idVal = 5;
            let emailStr = "headhoncho@corp.com";
            const employee = new Employee(nameStr, idVal, emailStr);
                    
            expect(employee.getName()).toEqual("Dr. Frank W. Gore, M.D., FAAC, ACS");
        });

    }); 

    describe("getId", () => {
        it('should return an ID when getID method is called', () => {
            // getId should return the name of the employee
            let nameStr = "Dr. Frank W. Gore, M.D., FAAC, ACS";
            let idVal = 5;
            let emailStr = "headhoncho@corp.com";
            const employee = new Employee(nameStr, idVal, emailStr);
                    
            expect(employee.getId()).toEqual(5);
            
        });
    });

    describe("getEmail", () => {
        it('should return an email address when getEmail method is called', () => {
            let nameStr = "Dr. Frank W. Gore, M.D., FAAC, ACS";
            let idVal = 5;
            let emailStr = "headhoncho@corp.com";
            const employee = new Employee(nameStr, idVal, emailStr);

            expect(employee.getEmail()).toEqual('headhoncho@corp.com');
        });
        
    });

    describe("getRole", () => {
        it('should return Employee when getRole method is called', () => {
            let nameStr = "Dr. Frank W. Gore, M.D., FAAC, ACS";
            let idVal = 5;
            let emailStr = "headhoncho@corp.com";
            const employee = new Employee(nameStr, idVal, emailStr);

            expect(employee.getRole()).toEqual('Employee');

        });
        
    });
});
