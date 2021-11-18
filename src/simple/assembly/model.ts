import { Timestamp, AccountId } from './../../utils';
import {PersistentVector} from "near-sdk-as";

@nearBindgen
export class HelloWorld {
  id: Timestamp;
  signer: AccountId;
  message: string;

  constructor(_id: Timestamp,_signer: AccountId, _message: string) {
    this.id = _id;
    this.signer = _signer;
    this.message = _message;
  }

}

export const messages = new PersistentVector<HelloWorld>("m");