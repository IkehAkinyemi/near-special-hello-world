![Near, Inc. logo](https://near.org/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311)

## Design

### Interface

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
