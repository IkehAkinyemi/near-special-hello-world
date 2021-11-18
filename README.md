# `near-sdk-as` Starter Kit

This is a good project to use as a starting point for your AssemblyScript project.

## Samples

This repository includes a complete project structure for AssemblyScript contracts targeting the NEAR platform.

The example here is very basic.  It's a simple contract demonstrating the following concepts:
- a single contract
- the difference between `view` vs. `change` methods
- basic contract storage

There are 2 AssemblyScript contracts in this project, each in their own folder:

- **simple** in the `src/simple` folder
- **singleton** in the `src/singleton` folder

### Simple

We say that an AssemblyScript contract is written in the "simple style" when the `index.ts` file (the contract entry point) includes a series of exported functions.

In this case, all exported functions become public contract methods.

```ts
function signMessage
```
- "Change" function (ie. a function that alters contract state)
- Updates the messages with a new message and returns the successful message

```ts
function retrieveMsgByAcctId
```
- "View" function (ie. a function that does not alters contract state)
- Recieves a Timestamp as parameter
- Returns a message from the messages 

```ts
function retrieveAllMsg
```
- "View" function (ie. a function that does not alters contract state)
- Returns the whole messages signed; details/content

