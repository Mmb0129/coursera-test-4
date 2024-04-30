// STEP 1: Wrap the entire contents of script.js inside of an IIFE
(function () {
  // STEP 2: Create helloSpeaker and byeSpeaker objects
  var helloSpeaker = {
    speak: function(name) {
      console.log("Hello " + name);
    }
  };

  var byeSpeaker = {
    speak: function(name) {
      console.log("Good Bye " + name);
    }
  };

  // STEP 3: Array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 4: Loop over the names array
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase(); // Retrieve the first letter of each name

    // STEP 5: Determine whether to say "Hello" or "Good Bye"
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Use byeSpeaker for names starting with 'j'
    } else {
      helloSpeaker.speak(names[i]); // Use helloSpeaker for other names
    }
  }
})();
