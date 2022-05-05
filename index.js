// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
      "alpha":"Adams",
      "bravo":"Boston",          
      "delta":"Denver",
      "charlie":"Chicago",
      "echo":"Easy",
      "foxtrot":"Frank"
    };
    result=lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");