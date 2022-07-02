## Prototypes

Each and every function in Javascrip automatically has a property called prototype

## Getters and Setters

Every object in javascript can have getter and setter properties
These special properties are called assessor properties.
While the more normal properties are called data properties.

Getters and Setters are functions that Get and Set a value

## Object.create

in the file create.js it shows how to link objects together in a prototype chain using only Object.create.

## Class Fields

1. Public Fields
2. Private Fields
3. Public Methods
4. Private Methods

### Public Fields

Public fields are on the instances and not on the prototypes
They are also referencable by the this keyword

### Private Fields

Private fields are created by putting a hashtag # infront of the property/field.
Thn whenever they are referenced within the class, you just reference them with the #name.
If you try to access a # private property outside of the class then you get a syntax error.

Private properties are initialized above the constructor function and then included in the constructor function.

### Public Methods

These are just the same as you have always done. And all these methods are part of the public interface(API) and they are
attached to the prototype

### Private Methods

Private methods are just like private fields/properties. They have not yet been fully added to the JS Standard and so you
cannot have a private method that is attached to the prototype. All private methods will be attached to the instance and therefore
created each time you create an instance. But you should only need specific ones.

## Data Encapsulation

Data encapsulation happens more with defining methods that access your data rather than having the user/functions access the
direct properties of the class objects/instances. You have classes so you can hide most of whta is going on in the background
and write methods that can be called on the classes that are easy to understand what their purpose is.

## The Planning Step

The first thing that you must do in creating any project is sufficiently plan out what the project will do and how you will make it happen.

There are four stages of the planning process:

1. User Stories
2. Features
3. Flow Chart
4. Architechture

### User Stories

This is where you write the narrative of the project. What will the users do with the project? How will they interact with it?
What is a step by step behavior of the user interacting with the finished project?
What are the first things that the user needs to see or interact with?

### Features

Using the information from the unser stories you should be able to list the features that the project will need to have in order
for it to do what we want it to do.

### Flow Chart

Now we can take the users actions and put them together with the features and come up with a flow cart of the projects behavior.
If the user does this than this happens. And using this flow chart we can determine when we will need to sanitize inputs, store variables, add to data sets, and return information.

### Architecture

In this step we determine what functionality goes where with respect to the projects files and folders. The project need to
be organized well so we know were to find the code for specific functionality. It is here that we prevent rewriting code, if
we see that we need certain functionality several times, then create a function for it. Look at what areas of the project
need to access other areas. How can we implement the Model, View, Controller Architechture in our project so that we are
keeping the datasets separate from the functionality?
