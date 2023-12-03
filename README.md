# typescript-practice

# 00. Introduction

* Typescript internally uses Javascript
* Typescript code can be compiled as Javascript code using tsc (TypeScript Compiler)
* 

Here's a side-by-side comparison of JavaScript and TypeScript in a table format:

# Feature | JavaScript | TypeScript
--- | --- | --- 
Type System	| Dynamically typed (types determined at runtime) | Statically typed (types defined at compile-time)
Type Annotations | No explicit type annotations | Type annotations for variables and functions
Tooling Support | Limited tooling support | Rich tooling support with code completion, static analysis, etc.
Code Readability | May be less self-documenting due to lack of type annotations | More self-documenting with type annotations
Refactoring | Riskier due to lack of type safety | Safer and more straightforward due to type system
Error Detection | Many errors only detected at runtime | Common errors detected at compile-time
Community & Ecosystem | Vast and mature ecosystem | Growing ecosystem with strong support for major libraries
Gradual Adoption | Can start from scratch or add to existing projects | Can be introduced into existing JavaScript projects
Learning Curve | Relatively straightforward to learn | Has a learning curve, especially for those new to static typing
Language Features | Supports latest ECMAScript (ES) features and syntax | Supports the same ES features while adding type-related features


Keep in mind that the choice between JavaScript and TypeScript should be based on the specific needs of your project, your team's familiarity and preferences, and the trade-offs associated with each language.



Certainly, here's a comparison of code-level changes between JavaScript and TypeScript in a table format:

# Aspect | JavaScript | TypeScript
--- | --- | --- 
Variable Declaration | javascript let x = 5; | typescript let x: number = 5;
Function Parameters | javascript function add(a, b) {...} | typescript function add(a: number, b: number) {...}
Function Return Type | No explicit return type | typescript function add(a: number, b: number): number {...}
Type Annotations | None (Types inferred at runtime) | Used extensively to define types
Null/Undefined Handling | No type checking for null/undefined | Type checking for null/undefined with optional chaining and non-null assertion
Type Mismatch Handling | Errors at runtime due to type mismatches | Errors caught at compile-time due to type mismatches
Class Declaration | javascript class Person {...} | typescript class Person {...}
Interface Declaration | Not typically used | Used to define object shapes and contracts
Enum Declaration | No built-in support | Supported with strongly-typed enums
Module System | Relies on CommonJS, AMD, or ES6 modules | Supports ES6 modules and provides module typings
Type Inference | Limited type inference | Extensive type inference based on context
Type Assertions | Rarely used for type casting | Allows for explicit type casting when needed

It's important to note that while TypeScript introduces additional syntax for type annotations and provides a more robust type system, you can still write JavaScript code within TypeScript files, making it a gradual and flexible adoption process.

# 01. Pre-Requisites and Installation
## 1.1. Install nodejs
https://nodejs.org/en/download

## 1.2. Install Vscode
https://code.visualstudio.com/download

## 1.3. Install "ESLint" extension in VS Code
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## 1.4. Install Typescript
https://www.typescriptlang.org/download

    node -v
    npm -v
    sudo npm install -g typescript
    tsc -v

## 1.5. Create project folder

    mkdir typescript-practice


# 02. Writing Typescript codes
naming convention: *.ts

    console.log('This is my first typescript code!!!')

# 03. Running Typescript file
.ts -> tsc(TS compiler) - js - JavaScript RunTime Env: Browser, NodeJS, App

    tsc filename.ts