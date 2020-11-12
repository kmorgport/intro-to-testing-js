// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
        });
    it('should return the string "Hello (input)."', function(){
        expect(sayHello(name)).toBe("Hello "+name+".");
        expect(sayHello(true)).toBe("Hello World!");
        expect(sayHello(false)).toBe("Hello World!")
    });
    it("should never return 'undefined' when called", function(){
        expect(sayHello()).not.toBe(undefined);
    });

});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return the boolean true or false when called', function() {
        expect(isFive(5)).toBe(true);
        expect(isFive(!5)).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isFive()).not.toBe(undefined);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return the boolean true or false when called', function() {
        expect(isEven(2)).toBe(true);});
    it('should return the boolean true or false when called', function() {
        expect(isEven(3)).toBe(false);});
    it('should return the boolean true or false when called', function() {
        expect(isEven(-4)).toBe(true);});
    it('should return the boolean true or false when called', function() {
        expect(isEven("banana")).toBe(false);});
    it('should return the boolean true or false when called', function() {
        expect(isEven("8")).toBe(true);});
    it('should return the boolean true or false when called', function() {
        expect(isEven(true)).toBe(false);});
    it('should return the boolean true or false when called', function() {
        expect(isEven(Infinity)).toBe(false);});
    it('should return the boolean true or false when called', function() {
        expect(isEven()).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isEven()).not.toBe(undefined);
    });
});
