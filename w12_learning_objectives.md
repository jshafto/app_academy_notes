# Week 12 Learning Objectives

## Professional Development (not on assessment)
### What is Scrum?
- no standard process. scrum is a framework for organizing and managing work
    - flexible, many aspects vary from team to team
### Scrum roles
- product owner: directs the highest priority development of the product
- scrum master: helps the team follow its process and be most efficient
- development team completes the work that the product owner specifies
### Scrum terminology
- backlog: list of features to be implemented
- grooming: managing the backlog, ensuring it is up-to-date and in prioritized order
- sprint: some amount of time during which the Scrum process is run
- sprint planning: team forecasts how many features they will be able to complete within a predetermined amount of time
- daily scrum: meeting that the Scrum team attends to communicate its activities and blockers
- show and tell: allows a larger group visibility into the products of the sprint
- retrospective: allows the team to determine process improvements
- backlog grooming: ensures that backlog of stories is well ordered and defined
### Sprint process
- timebox: a time frame with specific start and end dates, during which the team is expected to work at a sustainable pace to complete a chosen set of work that aligns with a sprint goal. benefits include:
    - establish work-in-progress (WIP) limits
    - prioritize and perform the small amount of work that matters most
    - demonstrate relevant progress by completing and validating important pieces of work
    - avoid unnecessary perfectionism
    - motivates closure
    - improves predictability
- sprints have short durations:
    - generate fast feedback
    - allow for early and more frequent deliverables
    - bound error
    - multiple, meaningful checkpoints
- sprints have a consistent duration (within a team) unless there is a compelling reason for change
- each sprint has a single clear focus
- 'done' can mean different things for different teams
### User stories
- product backlog items (PBIs): placeholders for requirements, instead of compiling a large inventory of detailed requirements up front
    - when a pbi is small and detailed enough, it can be moved to a sprint, where it will be designed, built and tested
- user stories are crafted in a way that makes them understandable to both business people and technical people.
- the card:
    - "as a-I want-so that" format
    - specifies a class of users (the user role), what that class of users wants to achieve (the goal), and why the users want to achieve the goal (the benefit)
- the conversation:
    - an ongoing dialogue, writing the user story, refining it, diving into task level details, etc.
    - may lead to a UI sketch, or an elaboration of business rules that gets written down
- the confirmation:
    - conditions of satisfaction
    - these are high-level acceptance tests—not identical to the detailed technical tests (of which there will be orders of magnitude more)
- good stories are:
    - Independent of one another
    - Negotiable
    - Valuable to the people using the product
    - Estimable by the development team
    - Small enough to fit in a sprint
    - Testable to know when its done

## Authentication Objectives
### Define the term authentication
### Describe the difference between asymmetric and symmetric cryptographic algorithms
### Identify "strong" vs. "broken" hash functions
### Implement session-based authentication in an Express application
### Implement a strong hash function to securely store passwords
### Describe and use the different security options for cookies

## Application Programming Interfaces Objectives
### Recall that REST is an acronym for Representational State Transfer
### Describe how RESTful endpoints differ from traditional remote-procedure call (RPC) services
### Identify and describe the RESTful meanings of the combinations of HTTP verbs and endpoint types for both HTML-based applications and APIs
#### HTTP verbs: GET, POST, PUT, PATCH, and DELETE
#### Endpoint types: collections of resources and singular resources
### Recall that RESTful is not a standard (like ECMAScript or URLs), but a common way to organize data interactions
### Explain how RESTful APIs are meant to be stateless
### Given a data model, design RESTful endpoints that interact with the data model to define application functionality
### Use the `express.json()` middleware to parse HTTP request bodies with type `application/json`
### Determine the maximum data an API response needs and map the content from a Sequelize object to a more limited data object
### Define a global Express error handler to return appropriate responses and status codes given a specific Accept header in the HTTP request
### Define Cross-Origin Resource Sharing (CORS) and how it is implemented in some Web clients
### Explain that CORS is an opt-in feature of Web clients
### Configure your API to use CORS to prevent unauthorized access from browser-based Web requests

## API Security Objectives
### Explain the fundamental concepts of OAuth as a way to authenticate users
### Describe the workflow of OAuth resource owner password credentials grant (RFC 6749 Section 4.3)
### Describe the components of a JSON Web Token (JWT) and how it is constructed
### Configure an Express application to use token-based authentication and authorization using OAuth resource owner password credentials grant
