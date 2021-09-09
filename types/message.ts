import { User } from "./user.ts";
import { Chat } from "./chat.ts";

export class Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly reply_to_message?: Message;
  readonly text?: string;
}
