/**
 * CrabtreeJS
 *
 * @version 0.1
 * @license MIT-License <http://opensource.org/licenses/MIT>
 *
 * Copyright (c) 20XX CrabtreeJS
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
 */

/*
  Development rules:
    100 character line limit
    No comments allowed except TODO

 */
"use strict";

var crabtree = (function() {

  //TODO: consider abstracting these arrays into seperate files
  var descriptors =
    ["AMD-compliant", "scalable", "responsive", "powerful", "integrated",
    "rich", "flexible", "modular"
  ];
  var dashPrefixes = ["event", "use case", "test", "behavior"];
  var dashSuffixes = ["driven", "compliant", "compatible", "intensive"];
  var nouns = ["framework", "interface", "module", "fixture", "github"];
  var verbs = ["implement", "build", "fork", "refactor", "utilize", "optimize"];
  var badDescriptors = ["tightly-coupled", "redundant", "static"];
  var badNouns = ["boilerplate"];

  var alreadyUsed = [];

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  function generateSentence() {

    return "Crabtree is " + aOrAn(randomValue(descriptors)) + ", " + randomValue(dashPrefixes) +
      "-" + randomValue(dashSuffixes) + " " + randomValue(nouns) + " that " +
      randomValue(verbs) + "s " + aOrAn(randomValue(descriptors)) + " " + randomValue(nouns) +
      ", without all of the " + randomValue(badDescriptors) + " " + randomValue(badNouns) + ".";
  };

  function randomValue(words) {
    var randomIndex = Math.floor((Math.random() * words.length)),
      randomValue = words[randomIndex];

    while (alreadyUsed.indexOf(randomValue) >= 0) {
      randomIndex = Math.floor((Math.random() * words.length)),
      randomValue = words[randomIndex];
    }
    alreadyUsed.push(randomValue);
    return randomValue;
  };

  function aOrAn(word) {
    var firstLetter = word.charAt(0);
    return (isVowel(firstLetter) ? "an " : "a ") + word;
  };

  function isVowel(letter) {
    return vowels.indexOf(letter.toLowerCase()) >= 0;
  }

  return function() {
    //console.log(isVowel('a') + ", " + isVowel('b'));
    //console.log(aOrAn("Anthony"), aOrAn("Bob"));
    console.log(generateSentence());
  };

})();