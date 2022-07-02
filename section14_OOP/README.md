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
