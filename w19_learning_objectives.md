# Week 19 Learning Objectives

## Alpine Linux Objectives
### Installing packages using Alpine Package Keeper (**apk**)
- repository: category of packages, tied together by common attribute
- mirror: website that hosts repositories
- release: collection of snapshots of various repositories
- `.apk` files contain programs, configuration files and dependency metadata (called "a-packs")
```zsh
# searching for packages using command line
# search for a library name
apk search libsqlite3

# search for a binary name
apk search consul

# search for a command
apk search nano

# search for an exact name (meaning exclude partial matches)
apk search -e nano
```

```zsh
# Install one package
apk add nano

# Install multiple packages
apk add bash zsh
```
### Verifying network configurations (using `ifconfig`)


## Threading Objectives
### Identify that JavaScript is a single-threaded language
- all code runs in the order of execution, never conc
### Identify that Python is a pseudo-multi-threaded language
### Describe what a lock is for thread synchronization purposes
### Recall that the Global Interpreter Lock (GIL) in CPython
### Use the `threading.Lock` thread synchronization primitive in Python code
### Use join to wait on executing threads


## Docker Container Objectives
### Utilize a Docker container to run an application with persistent data within an isolated environment
```
# add -d to run in background
# -p exposes a port
docker container run --name nginx -p 80:80 nginx
```
### Evaluate the advantages and disadvantages of containers as compared to virtual machines
### Use an image to initialize a Docker container
- an image is a template or a snapshot with os, software, and application you want to run
    - defined with a dockerfile (build dockerfile to get image, run image to get containers)
### Evaluate the health of a Docker container


## Dockerfile Objectives

### Explain the purpose of Docker Images and the Dockerfile
### Understand the flow of docker images builds and how Docker accelerates the process
### Execute the docker build command with appropriate flags
### Navigate Docker Hub
### Pull and run Docker images


## Docker Compose Objectives
### Summarize the most important features of Docker Compose
### Define services that make up your app within a docker-compose.yml file
### Run the main docker-compose commands to interact with your containers
### Deploy an application to Heroku

## Microservices Objectives
### Describe what a monolithic application is
### Describe the benefits and challenges of a monolithic architecture
### Describe what a microservice is
### Describe the benefits and challenges of a microservice-based architecture
### Identify and organize an application's capabilities into a collection of microservices
### Describe the properties of loosely coupled and highly cohesive microservices
### Explain the disadvantages of sharing a database across microservices
### Identify two strategies for introducing a breaking change to a microservice
### Describe the options for creating a UI for a microservices-based application
### Describe the benefits of using Docker to develop microservices-based applications
### Describe how to use Docker Compose to define the services that makeup a microservices-based application
