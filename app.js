"use strict";

let app = new Vue({
  el: "#app",
  data: {
    title: "Road to Junior",
    selected: "",
    questionIndex: 0,
    answeredC: 'answered',
    unansweredC: 'unAnswered',
    questions: [
          {
            question: "Describe <script async>.",
            id: 0,
            points: 100,
            responses: [
              {text: "Stops the rendering process, downloads and runs the script.", answer: false}, 
              {text: "The script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing).", answer: true},
              {text: "Doesn't stop rendering process while asynchronously downloading a script. When finishing rendering, it runs the script.", answer: false},
              {text: "It makes a script get fetched and executed immediately, before the browser continues parsing the page.", answer: false}
            ]
          }, {
            question: "Could you explain what is 'normalizing' CSS?",
            id: 1,
            points: 200,
            responses: [
              {text: 'Makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.', answer: true}, 
              {text: 'Deletes all default css.', answer: false},
              {text: 'It is the most anticipated css framework in 2018.', answer: false},
              {text: 'It is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline.', answer: false}, 
            ]
          }, {
            question: "What is the result of : (true + false) > 2 + true; ?",
            id: 2,
            points: 300,
            responses: [
              {text: 'True', answer: false}, 
              {text: 'NaN', answer: false},
              {text: 'TypeError', answer: false},
              {text: 'False', answer: true},
              {text: 'ReferenceError', answer: false},
              {text: 'Null', answer: false},
            ]
          }, {
            question: "What is the result of : NaN === Nan ?",
            id: 3,
            points: 400,
            responses: [
              {text: 'True', answer: false}, 
              {text: 'ReferenceError', answer: false},
              {text: 'TypeError', answer: false},
              {text: 'False', answer: true},
              {text: 'NaN', answer: false},
              {text: 'Null', answer: false},
            ]
          }, {
            question: "What is a 'closure' in JavaScript?",
            id: 4,
            points: 500,
            responses: [
              {text: 'This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.', answer: false}, 
              {text: 'It is an application-layer protocol for transmitting hypermedia documents.', answer: false},
              {text: 'There is no such thing in JavaScript.', answer: false},
              {text: 'A closure is the combination of a function and the lexical environment within which that function was declared.', answer: true}
            ]
          }, {
            question: "Javascript is which side language?",
            id: 5,
            points: 600,
            responses: [
              {text: 'Server.', answer: false},
              {text: 'JSP.', answer: false},
              {text: 'None.', answer: false},
              {text: 'Browser.', answer: true}, 
              {text: 'Dark side.', answer: false}
            ]
          }, {
            question: "Which of the following statements returns false?",
            id: 6,
            points: 700,
            responses: [
              {text: 'Wrong, too bad.', answer: false}, 
              {text: '"myName".length > 2', answer: false},
              {text: '4/2 == 2', answer: false},
              {text: '"InputControl".length < 4', answer: true},
              {text: '20%6 === 2', answer: false}
            ]
          }, {
            question: "How to empty an array in JavaScript?",
            id: 7,
            points: 800,
            responses: [
              {text: 'All of the answers are correct.', answer: true},
              {text: 'arrayList.length = 0;', answer: false}, 
              {text: 'arrayList.splice(0, arrayList.length);', answer: false},
              {text: 'while(arrayList.length){ arrayList.pop(); }', answer: false},
            ]
          }, {
            question: "What is the standard way to create an object prototype?",
            id: 8,
            points: 900,
            responses: [
              {text: 'Using the Prototype property.', answer: false}, 
              {text: 'To use an object constructor function.', answer: true},
              {text: 'Using a method.', answer: false},
              {text: 'With an Object literal.', answer: false},
              {text: 'None of the above.', answer: false},
            ]
          }, {
            question: "The this keyword gets automatically defined in the scope of every function and it’s binding happens in three main ways. What are they?",
            id: 9,
            points: 1000,
            responses: [
              {text: 'Default, native and outer.', answer: false}, 
              {text: 'Default, implicit and explicit.', answer: true},
              {text: 'Default, inner scope and global scope.', answer: false},
              {text: 'Default, local and with the "new" keyword.', answer: false},
            ]
          } 
        ]
    },
    methods: {
        checkTrue: function(questionIndex, index) {
          this.selected = this.questions[questionIndex].responses[index].answer;
        },
        checkAnswer: function() {
          if(this.selected === true) {
            this.questionIndex++;
            return this.selected = "";
          } 
          else if(this.selected === "") {
            return this.questionIndex;
          }
          else {
            this.selected = 'pooper';
          }
        },
        tryAgain: function() {
          const resultText = document.querySelector(".card-text");

          resultText.innerHTML = "";
          return this.selected = "", this.questionIndex = 0;
        },
        showResult: function() {
          const resultText = document.querySelector(".card-text");
          
          return resultText.innerHTML = `You have collected <span id="seeMe">${this.questionIndex*100}</span> points!`;
        }
    },
    components: {
    }
});