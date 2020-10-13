# Week 18 Learning Objectives

## Python Unit Testing
### Use the built-in **unittest** package to write unit tests
### Install and use the **pytest** package to write unit tests

## Python Environment Management
### Describe **pip**
### Describe **virtualenv**
### Demonstrate how to use **pipenv** to initialize a project and install dependencies
### Demonstrate how to run a Python program using **pipenv** using its shell
### Demonstrate how to run a Python program using **pipenv** using the `run` command
### Describe how modules and packages are found and loaded from import statements
### Describe the purpose of and when `__init__.py` runs
### Describe the purpose of and when `__main__.py` runs

## Flask
### Setup a new Flask project
### Run a simple Flask web application on your computer
### Utilize basic configuration on a Flask project
### Create a static route in Flask
### Create a parameterized route in Flask
### Use decorators run code before and after requests
### Identify the "static" route
### Use WTForms to define and render forms in Flask
### Use WTForms to validate data in a POST with the built-in validators
### Use the following basic field types in WTForms
#### `BooleanField`
#### `DateField`
#### `DateTimeField`
#### `DecimalField`
#### `FileField`
#### `MultipleFileField`
#### `FloatField`
#### `IntegerField`
#### `PasswordField`
#### `RadioField`
#### `SelectField`
#### `SelectMultipleField`
#### `SubmitField`
#### `StringField`
#### `TextAreaField`
### Create a Flask Blueprint
### Register the Flask Blueprint with the Flask application
### Use the Flask Blueprint to make routes
### Configure and use sessions in Flask
### Use a Jinja template as return for a Flask route with `render_template`
### Add variables to a Jinja template with `{{ }}`
### Use `include` to share template content in Jinja

## Psycopg
### Connect to a PostgreSQL RDBMS using Psycopg
### Open a "cursor" to perform data operations
### Use results performed from executing a `SELECT` statement on existing database entities
### Use parameterized SQL statements to insert, select, update, and delete data
### Specify what type Psycopg will convert the following PostgreSQL types into:
#### `NULL`
#### `bool`
#### `double`
#### `integer`
#### `varchar`
#### `text`
#### `date`
### Use the `with` keyword to clean up connections and database cursors


## SQLAlchemy
### Describe how to create an "engine" that you will use to connect to a PostgreSQL database instance
### Describe how the `with engine.connect() as connection:` block establishes and cleans up a connection to the database
### Describe how to create a database session from an engine
### Create a mapping for SQLAlchemy to use to tie together a class and a table in the database
### Add data to the database, both single entities as well as related data
### Update data in the database
### Delete data from the database (including cascades!)
### Know how to use and specify the "delete-orphan" cascading strategy
### Describe the purpose of a `Query` object;
### Use a `Session` object to query the database using a model
### How to order your results
### Use the `filter` method to find just what you want
### Use instance methods on the `Query` object to return a list or single item
### Use the `count` method to ... count
### Query objects with criteria on dependant objects
### Lazily load objects
### Eagerly load objects
### Install the **Flask-SQLAlchemy** extension to use with Flask
### Configure SQLAlchemy using **Flask-SQLAlchemy**
### Use the convenience functions and objects **Flask-SQLAlchemy** provides you to use in your code.
