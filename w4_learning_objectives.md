Browser Basics Lesson Learning Objectives

- Explain the difference between the BOM (browser object model) and the DOM(document object model).
    - the `document` object is a web page, and the DOM represents the object hierarchy of the document
    - the browser object model consists of a hierarchy of browser objects—one of which is the `document`
        - the top level object in the BOM is the `window`
        - `window.document` contains a reference to the document the window contains (can be shortened to `document`)
- Given a diagram of all the different parts of the Browser identify each part. Use the Window API to change the innerHeight of a user's window.
    - ![from: http://itwebtutorials.mga.edu/js/chp1/browser-object-model.aspx](https://raw.githubusercontent.com/jshafto/app_academy_notes/master/bom-hierarchy.jpg)

- Identify the context of an anonymous functions running in the Browser (the window).
- Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when all the elements on the page load (using DOMContentLoaded)
- Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads
- Identify three ways to prevent JS code from executing until an entire HTML page is loaded
- Label a diagram on the Request/Response cycle.
- Explain the Browser's main role in the request/response cycle. (1.Parsing HTML,CSS, JS 2. Rendering that information to the user by constructing a DOM tree and rendering it)
- Given several detractors - identify which real-world situations could be implemented with the Web Storage API (shopping cart, forms saving inputs etc.)
- Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site add something to their cart and then delete that cookie using the Chrome Developer tools in order to empty their cart.
