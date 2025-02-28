// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "javascript",
    questions: [
      {
        question: "What keyword is used to define a function in JavaScript?",
        options: ["def","func","function"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;"],
        correctAnswer: 0,
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>","<script>","<js>"],
        correctAnswer: 1,
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <body> section","The <head> section", "The <head> section",
        "Both the <head> section and the <body> section are correct"],
        correctAnswer: 2,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer:2,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["<script src='xxx.js'>", "<script name='xxx.js'>", "<script href='xxx.js'>"],
        correctAnswer: 0,
      },
      {
        question: "The external JavaScript file must contain the <script> tag.",
        options: [ "True","False","None"],
        correctAnswer: 1,
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["alertBox('Hello World');","alert('Hello World');", "msg('Hello World');"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: [ "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 2,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value"],
        correctAnswer: 0,
      },
      {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if i =! 5 then","if (i <> 5)","if (i != 5) "],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function"],
        correctAnswer: 0,
      },
      {
        question: "How does a WHILE loop start?",
        options: ["while (i <= 10; i++) ", "while (i <= 10) ", "while i = 1 to 10"],
        correctAnswer: 1,
      },
      {
        question: "How can you add a comment in a JavaScript??",
        options: ["<!--This is a comment-->", "'This is a comment", "//This is a comment "],
        correctAnswer: 2,
      },
      {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["Math.round(7.25)  ", "rnd(7.25)", "Math.rnd(7.25)"],
        correctAnswer: 0,
      },
      {
        question: "How can you detect the client's browser name?",
        options: ["browser.name ", "client.navName", "navigator.appName "],
        correctAnswer: 2,
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onclick", "onmouseclick", "onmouseover", "onchange"],
        correctAnswer: 0,
      },
      {
        question: "How do you declare a JavaScript variable?",
        options: ["var carName;", "variable carName;", "v carName;"],
        correctAnswer: 0,
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: ["=", "x", "*"],
        correctAnswer: 0,
      },
      {
        question: "What will the following code return: Boolean(10 > 9)",
        options: ["true", "false", "NaN"],
        correctAnswer: 0,
      },

   
     
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if condition {}","if (condition) {}",  "if {} else"],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "html",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: 0,
      },
      {
        question: "Who is making the Web standards?",
        options: ["The World Wide Web Consortium", "Mozilla", "Google"],
        correctAnswer: 0,
      },
      {
        question: "Choose the correct HTML element for the largest heading:",
        options: [ "<h6>", "<head>", "<h1>"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: [ "<lb>", "<br>","<break>"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct HTML for adding a background color?",
        options: ["<body style=\"background-color:yellow;\">", "<background>yellow</background>", "<body bg=\"yellow\">"],
        correctAnswer: 0,
      },
      {
        question: "Choose the correct HTML element to define important text",
        options: ["<b>", "<strong>",  "<important>"],
        correctAnswer: 1,
      },
      {
        question: "Choose the correct HTML element to define emphasized text",
        options: ["<em>", "<italic>", "<i>"],
        correctAnswer: 0,
      },
      {
        question: "Which character is used to indicate an end tag?",
        options: ["/", "<", "*"],
        correctAnswer: 0,
      },
      {
        question: "How can you open a link in a new tab/browser window?",
        options: [ "<a href=\"url\" new>", "<a href=\"url\" target=\"_blank\">","<a href=\"url\" target=\"new\">"],
        correctAnswer: 1,
      },
      {
        question: "Which doctype is correct for HTML5?",
        options: ["<!DOCTYPE html>", "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 5.0//EN' 'http://www.w3.org/TR/html5/strict.dtd'>", "<!DOCTYPE HTML5>"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML element defines the title of a document?",
        options: ["<head>", "<meta>", "<title>"],
        correctAnswer: 2,
      },
      {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: [ "src", "title", "alt"],
        correctAnswer: 2,
      },
      {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<section>", "<footer>", "<bottom>"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct HTML element for playing video files?",
        options: ["<media>", "<video>", "<movie>"],
        correctAnswer: 1,
      },

      {
        question: "What is the correct HTML element for playing audio files?",
        options: ["<sound>", "<audio>", "<mp3>"],
        correctAnswer: 1,
      },
      {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        options: ["formvalidate", "placeholder", "required "],
        correctAnswer: 2,
      },
      {
        question: "Which HTML element defines navigation links?",
        options: ["<navigate>", "<nav> ", "<navigation> "],
        correctAnswer: 1,
      },
    ],
  },

  {
    category: "css",
    questions: [
      {
        question: "What does CSS stand for?",
        options: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct HTML for referring to an external style sheet?",
        options: ["<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">", "<style src=\"mystyle.css\">", "<stylesheet>mystyle.css</stylesheet>"],
        correctAnswer: 0,
      },
      
      {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["In the <head> section", "In the <body> section", "At the end of the document"],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>"],
        correctAnswer: 2,
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "style", "class"],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["text-style", "font-size", "text-size"],
        correctAnswer: 1,
      },
      {
        question: "How do you insert a comment in a CSS file?",
        options: ["' this is a comment", "// this is a comment", "/* this is a comment */"],
        correctAnswer: 2,
      },
      {
        question: "Which property is used to change the background color?",
        options: ["background-color", "color", "bgcolor"],
        correctAnswer: 0,
      },
      {
        question: "How do you display hyperlinks without an underline?",
        options: ["a {underline:none;}", "a {text-decoration:none;}", "a {decoration:no-underline;}"],
        correctAnswer: 1,
      },
      {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-weight", "font-family"],
        correctAnswer: 2,
      },
      {
        question: "How do you select an element with id 'demo'?",
        options: ["*demo ", "#demo ", ".demo"],
        correctAnswer: 1,
      },
      {
        question: "Which property is used to change the left margin of an element?",
        options: ["margin-left ", "padding-left", "indent"],
        correctAnswer: 0,
      },
      {
        question: "How do you make a list that lists its items with squares?",
        options: ["list: square; ", "list-style-type: square; ", "list-type: square;"],
        correctAnswer: 1,
      },
      {
        question: "How do you select elements with class name 'test'?",
        options: [".test ", "test", "#test"],
        correctAnswer: 0,
      },
      {
        question: "How do you select all p elements inside a div element?",
        options: ["div + p", "div.p", "div p"],
        correctAnswer: 2,
      },
      
    ],
  },

];
