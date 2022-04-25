const Intern = require("../lib/intern");

// can instantiate instance - DONE
// can set name via constructur - DONE
// can set id via constructor - DONE
// can get name  via getName()  - DONE 
// can get id via getID - DONE
// can get email via getEmail - DONE
// getRole() should return intern - DONE

describe("Intern", () => {
    describe('Initialization', () => {
        it("should set the values of name, id, email, and school when those values are passed into the object", () => {
            let nameStr = "Helga Periwinkle";
            let idVal = 2;
            let emailStr = "helga@corp.com";
            let schoolStr = "Hogwarts";
            const intern = new Intern(nameStr, idVal, emailStr, schoolStr);
            
            expect(intern.name).toEqual("Helga Periwinkle");
            expect(intern.id).toEqual(2);
            expect(intern.email).toEqual("helga@corp.com");
            expect(intern.school).toEqual("Hogwarts");
        });
        
    });
    
    describe("getSchool", () => {
        it("should return a name when getName method is called", () => {
            // getName should return the name of the intern
            let nameStr = "Helga Periwinkle";
            let idVal = 2;
            let emailStr = "helga@corp.com";
            let schoolStr = "Hogwarts";
            const intern = new Intern(nameStr, idVal, emailStr, schoolStr);
                    
            expect(intern.getSchool()).toEqual("Hogwarts");
        });

    }); 

    describe("getRole", () => {
        it('should return intern when getRole method is called', () => {
            let nameStr = "Helga Periwinkle";
            let idVal = 2;
            let emailStr = "helga@corp.com";
            let schoolStr = "Hogwarts";
            const intern = new Intern(nameStr, idVal, emailStr, schoolStr);

            expect(intern.getRole()).toEqual('Intern');

        });
        
    });
});
