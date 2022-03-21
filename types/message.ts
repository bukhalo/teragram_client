import { User } from "./user.ts";
import { Chat } from "./chat.ts";
import { MessageEntity } from "./message_entity.ts";

export class Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly reply_to_message?: Message;
  readonly text?: string;
  readonly entities?: MessageEntity[];
}
