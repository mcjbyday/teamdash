const Engineer = require("../lib/engineer");


describe("engineer", () => {
    describe('Initialization', () => {
        it("should set the values of name, id, email, and github when those values are passed into the object", () => {
            let nameStr = "Ramona Verona";
            let idVal = 2;
            let emailStr = "ramona@corp.com";
            let githubStr = "EliteHaxor3";
            const engineer = new Engineer(nameStr, idVal, emailStr, githubStr);
            
            expect(engineer.name).toEqual("Ramona Verona");
            expect(engineer.id).toEqual(2);
            expect(engineer.email).toEqual("ramona@corp.com");
            expect(engineer.github).toEqual("EliteHaxor3");
        });
        
    });
    
    describe("getGithub", () => {
        it("should return a name when getName method is called", () => {
            // getName should return the name of the engineer
            let nameStr = "Ramona Verona";
            let idVal = 2;
            let emailStr = "ramona@corp.com";
            let githubStr = "EliteHaxor3";
            const engineer = new Engineer(nameStr, idVal, emailStr, githubStr);
                    
            expect(engineer.getGithub()).toEqual("EliteHaxor3");
        });

    }); 

    describe("getRole", () => {
        it('should return engineer when getRole method is called', () => {
            let nameStr = "Ramona Verona";
            let idVal = 2;
            let emailStr = "ramona@corp.com";
            let githubStr = "EliteHaxor3";
            const engineer = new Engineer(nameStr, idVal, emailStr, githubStr);

            expect(engineer.getRole()).toEqual('Engineer');

        });
        
    });
});
