let Visitor = require("../node.js");

describe("A function", function() {

  it("Should create the json file of Alice Cooper", function() {

    let alice = new Visitor("Alice Cooper", 33, "22 Nov 2019", "09:06 AM", "The service was great", "Maria Ntsele");
    expect(alice.save()).toBe("visitor_alice_cooper.js");
  });

});
