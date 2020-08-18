# Week 10 Learning Objectives


## RDBMS And Database Entity Objectives
### Define what a relational database management system is
- software that manages a database
### Describe what relational data is
- relational data is structured information with defined relationships between items
- data is stored in tables, and tables can be linked together
### Define what a database is
- a database is a collection of structured data that the RDBMS manages for you
### Define what a database table is
- the entities that actually hold the data—consists of columns and rows
### Describe the purpose of a primary key
- a primary key is the unique identifier for each row in a table
### Describe the purpose of a foreign key
- a foreign key links two tables together—it identifies the corresponding uniquely identified row in a different table
### Describe how to properly name things in PostgreSQL
-  names should consist of lowercase letters, numbers, and underscores
### Install and configure PostgreSQL 12, its client tools, and a GUI client for it named Postbird
### Connect to an instance of PostgreSQL with the command line tool `psql`
```
psql -U <username> postgres
```
### Identify whether a user is a normal user or a superuser by the prompt in the `psql` shell
- prompt for a superuser ends with`#`
- prompt for a regular user ends with `>`
### Create a user for the relational database management system
```sql
create user <username> with password 'password';
create user <username> with superuser password 'password';
```
### Create a database in the database management system
```sql
create database <databasename> with owner <owner>
```
### Configure a database so that only the owner (and superusers) can connect to it
```sql
revoke connect on database <databasename> from public;
```
### View a list of databases in an installation of PostgreSQL
- `\list`
### Create tables in a database
```sql
create table <tablename> (
    id serial primary key,
    string_data varchar(50) not null,
    integer_data integer not null,
    decimal_data numeric(2, 1) not null
)
```
### View a list of tables in a database
- `\dt`
### Identify and describe the common data types used in PostgreSQL
- `varchar(<max number of characters>)`: a string with a character limit
- `text`: a string with no character limit (but will behave more slowly—only use if necessary)
- `integer`: an integer
- `numeric(<total digits>, <digits after decimal>)`
### Describe the purpose of the `UNIQUE` and `NOT NULL` constraints, and create columns in database tables that have them
- unique: no repeated values
- not null: cannot be left blank
### Create a primary key for a table
```sql
id serial
primary key (id)
```
### Create foreign key constraints to relate tables
```sql
foreign key (person_id) references people (id)
```
### Explain that SQL is not case sensitive for its keywords but is for its entity names
- sql is not case sensitive for its keywords (but be consistent in your own code). (e.g.`select` is interchangeable with `SELECT`), however, labels, id, etc will all be case-sensitive

## SQL objectives
### How to use the `SELECT ... FROM ...` statement to select data from a single table
```sql
select *
from puppies;
```
### How to use the `WHERE` clause on `SELECT`, `UPDATE`, and `DELETE` statements to narrow the scope of the command
```sql
select dog_name, breed
from puppies
where microchipped = true;

select dog_name, age_yrs
from puppies
where age_yrs between 0 and 0.6;

select dog_name, age_yrs
from puppies
order by age_yrs desc;
```
### How to use the `JOIN` keyword to join two (or more) tables together into a single virtual table
```sql
select *
from puppies
inner join breeds
on (puppies.breed_id = breeds.id)
```
### How to use the `INSERT` statement to insert data into a table
```sql
insert into table_name
values (column1_value, colum2_value, column3_value);

insert into table_name (col4, col5)
values
('col4_val', 'col5_val'),
('col4_val', 'col5_val')
```
### How to use an `UPDATE` statement to update data in a table
### How to use a `DELETE` statement to remove data from a table
### How to use a seed file to populate data in a database
```
psql -d [database] < [path_to_file/file.sql]
cat [path_to_file/file.sql] | psql -d [database]
```
### How to perform relational database design
### How to use transactions to group multiple SQL commands into one succeed or fail operation
### How to apply indexes to tables to improve performance
### Explain what and why someone would use `EXPLAIN`
### Demonstrate how to install and use the node-postgres library and its `Pool` class to query a PostgreSQL-managed database
### Explain how to write prepared statements with placeholders for parameters of the form "$1", "$2", and so on

## ORM Objectives
### How to install, configure, and use Sequelize, an ORM for JavaScript
### How to use database migrations to make your database grow with your application in a source-control enabled way
### How to perform CRUD operations with Sequelize
### How to query using Sequelize
### How to perform data validations with Sequelize
### How to use transactions with Sequelize

## Professional Development: Portfolio Quality
### Recall the items recruiters are most interested
### Explain the aspects of good looking Web application
### Identify App Academy's expectations of your projects for after you graduate
### Practice good code hygiene when making projects live
