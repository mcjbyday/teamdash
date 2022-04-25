const Manager = require("../lib/manager");

describe("manager", () => {
    describe('Initialization', () => {
        it("should set the values of name, id, email, and officeNumber when those values are passed into the object", () => {
            let nameStr = "Julia Bulia";
            let idVal = 9;
            let emailStr = "julia@corp.com";
            let officeNumberVal = 611;
            const manager = new Manager(nameStr, idVal, emailStr, officeNumberVal);
            
            expect(manager.name).toEqual("Julia Bulia");
            expect(manager.id).toEqual(9);
            expect(manager.email).toEqual("julia@corp.com");
            expect(manager.officeNumber).toEqual(611);
        });
        
    });
    

    describe("getRole", () => {
        it('should return manager when getRole method is called', () => {
            let nameStr = "Julia Bulia";
            let idVal = 9;
            let emailStr = "julia@corp.com";
            let officeNumberVal = 611;
            const manager = new Manager(nameStr, idVal, emailStr, officeNumberVal);

            expect(manager.getRole()).toEqual('Manager');

        });
        
    });
});
