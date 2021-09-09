import { Message } from "./message.ts";

export enum UpdateType {
  MESSAGE_UPDATE = "MESSAGE_UPDATE",
}

export abstract class Update {
  readonly update_id!: number;
  readonly message?: Message;
}

export class UpdateMessage implements Update {
  readonly update_id!: number;
  readonly message!: Message;
}
