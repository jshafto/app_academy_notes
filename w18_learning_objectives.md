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
- install Flask package
```zsh
pipenv install Flask~=1.1
```
- import flask, provide name,
```py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return '<h1>Hello, world!</h1>'
```
### Run a simple Flask web application on your computer
- set the environment variable `FLASK_APP` and `FLASK_ENV`
- `pipenv run flask run`
### Utilize basic configuration on a Flask project
```zsh
pipenv install python-dotenv~=0.13
```
- create a file named _.flaskenv_
- the FLASK_APP can point to folder or file
```
FLASK_APP=simple.py
FLASK_ENV=development
SECRET_KEY=super-secret-stuff
```
### Create a static route in Flask
- routes are set with the route decorator on a function.
- can even set multiple route decorators
- return value is the html or template
```py
@app.route('/')
def some_function():
    return 'Some content'
```
### Create a parameterized route in Flask
```py
@app.route('/item/<int:id>')
def item(id):
    return f'<h1>Item {id}</h1>'
```
### Use decorators run code before and after requests
```py
@app.before_request
def before_request_function():
  print("before_request is running")

@app.after_request
def after_request_function(response):
  print("after_request is running")
  return response
```
### Identify the "static" route
-  flask has a built-in special route `/static` that will look for a directory named `/static` in the directory of your project where you create the `Flask` object
### Use WTForms to define and render forms in Flask
- **Flask-WTF** is a thin wrapper around the **WTForms** package which is helpful for quickly creating HTML Forms in Python.
- install with `pipenv install Flask-WTF~=0.14`
```py
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField

# for your form, define a class that extends the FlaskForm class
class Login(FlaskForm):
  username = StringField("Username")
  password = PasswordField("Password")
  submit = SubmitField("Sign In")
```
- import into your routes file, pass into template as a variable
```py
@app.route('/login', methods=['GET', 'POST'])
def login():
  form = LoginForm()
  if form.validate_on_submit():
    return 'Submit complete'
  return render_template('login.html', form=form)
```
- in the jinjatemplate:
```html
<form action="" method="post">
  {{ form.hidden_tag() }}
  <p>{{ form.username() }}</p>
  <p>{{ form.submit() }}</p>
</form>
```
### Use WTForms to validate data in a POST with the built-in validators
```py
#...
from wtforms.validators import DataRequired

class Login(FlaskForm):
  username = StringField("Username", validators=[DataRequired])
  password = PasswordField("Password")
  submit = SubmitField("Sign In")
```
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
- a way to organize a group of related views and other code (similar to `Router` object in Express)
```py
from flask import BluePrint

# creates a Blueprint named admin
bp = Blueprint('inventory', __name__, url_prefix='/inventory')

@bp.route('/item/<int:id>')
def # ...
```
### Register the Flask Blueprint with the Flask application
```py
app.register_blueprint(routes.inventory.bp)
```
### Use the Flask Blueprint to make routes
### Configure and use sessions in Flask
- basically just a dictionary
- session lets you keep track of state in your app across different routes
```py
from flask import session
```
### Use a Jinja template as return for a Flask route with `render_template`
```zsh
pipenv install Jinja2
```
- create templates folder
  - add file with generic `html`
```py
from flask import render_template
# ...
@app.route('/page')
def help():
  return render_template('page.html')
```
### Add variables to a Jinja template with `{{ }}`
- use regular html in the jinja template, with variables inside double curly braces
```html
<h2>{{ item.name }}</h2>
```
- then pass these variables as kwargs into the render funtion
```py
# ...
return render_template('item.html', item=item)
# ...
```
### Use `include` to share template content in Jinja
```html
<!-- in jinja template -->
{%  include 'nav.html' %}
```

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
```
pipenv install psycopg2-binary sqlalchemy --python "$PYENV_ROOT/shims/python"
```
### Describe how to create an "engine" that you will use to connect to a PostgreSQL database instance
- an engine is the object that allows you to connect to the database and create sessions, both of which allow you to interact with the database.
- provide a database-specific URL to the create_engine function so the Engine knows what to connect to.
```py
from sqlalchemy import create_engine

engine = create_engine("postgresql://sqlalchemy_test:password@localhost/sqlalchemy_test")
```
- If you ever do use SQLAlchemy directly, you should only create one engine for every database to which you want to connect. Don't create engines all over the place. That can lead to very bad performance.
### Describe how the `with engine.connect() as connection:` block establishes and cleans up a connection to the database
```py
from sqlalchemy import create_engine

db_url = "postgresql://sqlalchemy_test:password@localhost/sqlalchemy_test"
engine = create_engine(db_url)

with engine.connect() as connection:
    result = connection.execute("""
        SELECT o.first_name, o.last_name, p.name
        FROM owners o
        JOIN ponies p ON (o.id = p.owner_id)
    """)
    for row in result:
        print(row["first_name"], row["last_name"], "owns", row["name"])

engine.dispose()
```
- you create an engine, use the engine to create a connection, use the connection to execute a query, then print out the results from your query. Finally, you dispose of the engine because cleaning up is good.
### Describe how to create a database session from an engine
- the `Session` is the way that you use the mappings between the database and your objects
- first you use the sessionmaker method to create a factory that will, in turn, create your session instance.
```py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

db_url = "postgresql://sqlalchemy_test:password@localhost/sqlalchemy_test"
engine = create_engine(db_url)

SessionFactory = sessionmaker(bind=engine)

session = SessionFactory()

# Do stuff with the session

engine.dispose()
```
### Create a mapping for SQLAlchemy to use to tie together a class and a table in the database
- import the `declarative_base` function and use it to generate a base class;
- declare the class using the generated base class as its base class; and,
- specify the table that it should map to using the class dunder property `__tablename__`.
- ( it doesn't do any magical guessing of your table name based on the class name. Many Python developers prefer this because the table name is explicitly declared in the mapping class. You don't have to remember weird naming rules that the ORM forces on you)
```py
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Owner(Base):
    __tablename__ = 'owners'


class Pony(Base):
    __tablename__ = 'ponies'
```
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
