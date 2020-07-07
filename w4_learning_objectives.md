# Week 4 Learning Objectives
## Browser Basics Lesson Learning Objectives

- Explain the difference between the BOM (browser object model) and the DOM(document object model).
    - the `document` object is a web page, and the DOM represents the object hierarchy of the document
    - the browser object model consists of a hierarchy of browser objects—one of which is the `document`
        - the top level object in the BOM is the `window`
        - `window.document` contains a reference to the document the window contains (can be shortened to `document`)
- Given a diagram of all the different parts of the Browser identify each part. Use the Window API to change the innerHeight of a user's window.
  - user interface (UI) is the browser interface. everything except the actual content
  - browser engine manages interactions between UI and rendering engine
  - displays or renders the page content. parses HTML and CSS and render that content
  - networking: handles network calls (e.g. HTTP requests)
  - javascript interpreter: parses and executes js code
  - UI backend: used for drawing basic widgets like combo bozxes and windows; uses operating system user interface methods
  - data storage later: peristance of data stored in browser (e.g. cookies)
    ![from: http://itwebtutorials.mga.edu/js/chp1/browser-object-model.aspx](./bom-hierarchy.jpg)
```javascript
// Open a new window
newWindow = window.open("", "", "width=100, height=100");

// Resize the new window
newWindow.resizeTo(500, 500);
```
- Identify the context of an anonymous functions running in the Browser (the window).
    - `window`
- Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when all the elements on the page load (using `DOMContentLoaded`)
    - `DOMContentLoaded` ensures that script will run when the document has been loaded without waiting for stylesheets, images and subframes to load.
```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="dom-ready-script.js"></script>
  </head>
  <body></body>
  <html></html>
</html>
```
```javascript
window.addEventListener("DOMContentLoaded", event => {
  console.log("This script loaded when the DOM was ready.");
});
```
- Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads
```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="window-load-script.js"></script>
    </head>
  <body></body>
  <html></html>
</html>
```
```javascript
window.onload = () => {
  console.log(
    "This script loaded when all the resources and the DOM were ready."
  )
}
```
- Identify three ways to prevent JS code from executing until an entire HTML page is loaded
  - use `DOMContentLoaded` event in external JS file (event listener)
    - `window.onload` or `window.addEventListener("DomContentLoaded"...)`
  - put a `<script>` tag importing you external code at the bottom of your html file
  - use `async defer` in the script tag in the html file
- Label a diagram on the Request/Response cycle.
- Explain the Browser's main role in the request/response cycle.
    - Parsing HTML, CSS, JS
    - Rendering that information to the user by constructing a DOM tree and rendering it)
- Given several detractors - identify which real-world situations could be implemented with the Web Storage API
  - the critical piece is that Web Storage API is only useful when we only need the stuff stored client-side
    - shopping cart, forms saving inputs etc.
- Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site add something to their cart and then delete that cookie using the Chrome Developer tools in order to empty their cart.
  - go into inspector, "application" tab, under cookies
    - delete, refresh page, see what changes
    - names are cryptic by design, possibly?
  - on amazon, this is the "session-id"
    - unless you're logged in, in which case the cart may be stored somewhere other than just Web Storage API

## Element Selection Lesson Learning Objectives

- Given HTML that includes `<div id=”catch-me-if-you-can”>HI!</div>`, write a JavaScript statement that stores a reference to the `HTMLDivElement` with the `id` “catch-me-if-you-can” in a variable named “divOfInterest”.
- Given HTML that includes seven SPAN elements each with the class “cloudy”, write a JavaScript statement that stores a reference to a NodeList filled with references to the seven HTMLSpanElements in a variable named “cloudySpans”.
- Given an HTML file with HTML, HEAD, TITLE, and BODY elements, create and reference a JS file that in which the JavaScript will create and attach to the BODY element an H1 element with the id "sleeping-giant" with the content "Jell-O, Burled!".
- Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with the SCRIPT's SRC attribute referencing an empty JS file, write a script in the JS file to create a DIV element with the id "lickable-frog" and add it as the last child to the BODY element.
- Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with no SRC attribute on the SCRIPT element, write a script in the SCRIPT block to create a UL element with no id, create an LI element with the id "dreamy-eyes", add the LI as a child to the UL element, and add the UL element as the first child of the BODY element.
- Write JavaScript to add the CSS class "i-got-loaded" to the BODY element when the window fires the DOMContentLoaded event.
- Given an HTML file with a UL element with the id "your-best-friend" that has six non-empty LIs as its children, write JavaScript to write the content of each LI to the console.
- Given an HTML file with a UL element with the id "your-worst-enemy" that has no children, write JavaScript to construct a string that contains six LI tags each containing a random number and set the inner HTML property of ul#your-worst-enemy to that string.
- Write JavaScript to update the title of the document to the current time at a reasonable interval such that it looks like a real clock.

## Event Handling Lesson Learning Objectives

- Given an HTML page that includes `<button id="increment-count">I have been clicked <span id="clicked-count">0</span> times</button>`, write JavaScript that increases the value of the content of span#clicked-count by 1 every time button#increment-count is clicked.
- Given an HTML page that includes `<input type="checkbox" id="on-off"><div id="now-you-see-me">`Now you see me`</div>`, write JavaScript that sets the display of div#now-you-see-me to "none" when input#on-off is checked and to "block" when input#on-off is not checked.
- Given an HTML file that includes `<input id="stopper" type="text" placeholder="Quick! Type STOP">`, write JavaScript that will change the background color of the page to cyan five seconds after a page loads unless the field input#stopper contains only the text "STOP".
- Given an HTML page with that includes `<input type=”text” id=”fancypants”>`, write JavaScript that changes the background color of the textbox to #E8F5E9 when the caret is in the textbox and turns it back to its normal color when focus is elsewhere.
- Given an HTML page that includes a form with two password fields, write JavaScript that subscribes to the forms submission event and cancels it if the values in the two password fields differ.
- Given an HTML page that includes a div styled as a square with a red background, write JavaScript that allows a user to drag the square around the screen.
- Given an HTML page that has 300 DIVs, create one click event subscription that will print the id of the element clicked on to the console.
- Identify the definition of the bubbling principle.


## JSON Learning Objectives
The objective of this lesson is to familiarize you with the JSON format and how to serialize to and deserialize from that format.

The learning objectives for this lesson are that you can:

- Identify and generate valid JSON-formatted strings
- Use `JSON.parse` to deserialize JSON-formatted strings
- Use `JSON.stringify` to serialize JavaScript objects
- Correctly identify the definition of "deserialize"
- Correctly identify the definition of "serialize"
- This lesson is relevant because JSON is the lingua franca of data interchange.


## Storage Lesson Learning Objectives

- Write JavaScript to store the value "I <3 falafel" with the key "eatz" in the browser's local storage.
- Write JavaScript to read the value stored in local storage for the key "paper-trail".
