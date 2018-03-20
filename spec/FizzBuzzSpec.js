describe("FizzBuzz", function(){

  beforeEach(function(){
    fb = new FizzBuzz();
  });

  it("should return 0 when given 0", function(){
    expect(fb.says(0)).toEqual(0);
  });

  it("should return Fizz when given 3", function(){
    expect(fb.says(3)).toEqual('Fizz');
  });

  it("should return Buzz when given 5", function(){
    expect(fb.says(5)).toEqual('Buzz');
  });

  it("should return FizzBuzz when given 15", function(){
    expect(fb.says(15)).toEqual('FizzBuzz');
  });

  it("should return number when number isn't ÷ by 3 or 5", function(){
    expect(fb.says(2)).toEqual(2);
  });

  it("should check if number IS divisible by 3", function(){
    expect(fb.isDivisibleByThree(3)).toEqual(true);
  })

  it("should check if number is NOT divisible by 3", function(){
    expect(fb.isDivisibleByThree(4)).toEqual(false);
  })

  it("should check if number IS divisible by 5", function(){
    expect(fb.isDivisibleByFive(5)).toEqual(true);
  });

  it("should check if number IS NOT divisible by 5", function(){
    expect(fb.isDivisibleByFive(4)).toEqual(false);
  });

  it("should check if number IS divisible by 15", function(){
    expect(fb.isDivisibleByFifteen(15)).toEqual(true);
  });

  it("should check if number IS NOT divisible by 15", function(){
    expect(fb.isDivisibleByFifteen(10)).toEqual(false);
  });

});
