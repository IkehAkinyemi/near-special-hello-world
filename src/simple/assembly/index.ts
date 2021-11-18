import { u128, PersistentVector } from "near-sdk-as";

import { Context } from "near-sdk-as";
import { Timestamp, AccountId, TxFee } from "./../../utils";
import { messages, HelloWorld } from "./model";

export function signMessage(_message: string) {
  const id = generateuniqueID();

  const message = new HelloWorld(id, Context.sender, _message);

  messages.push(message);
}

export function retrieveMsgByAcctId(_acctId: AccountId): string {
  let message = "";

  for (let x = 0; x < messages.length; x++) {
    if (messages[x].signer == _acctId) {
      message = messages[x].message;
    }
  }

  return message;
}


export function retrieveAllMsg(): HelloWorld[]  {
  const newMessages: HelloWorld[] = [];
  for (let x = 0; x < messages.length; x++) {
    const message = messages[x] as HelloWorld;
    newMessages.push(message)
  }

  return newMessages;
}

export function deleteMsgById(_acctId: AccountId): string {
  let Newmessages = new PersistentVector<HelloWorld>("newM");

  for (let x = 0; x < messages.length; x++) {
    if (messages[x].signer != _acctId) {
      Newmessages.push(messages[x]);
    }
  }

  return "Your message has successfully been deleted!";
}

function generateuniqueID(): Timestamp {
  const id = "CS-" + Context.blockTimestamp.toString();
  return id;
}

function verifyShopTxFee(deposit: u128): void {
  assert(
    deposit >= TxFee,
    "You need to have at least 0.52 NEAR tokens to continue"
  );
}
