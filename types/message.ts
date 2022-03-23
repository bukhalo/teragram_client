import { User } from "./user.ts";
import { Chat } from "./chat.ts";
import { MessageEntity } from "./message_entity.ts";
import { Animation } from "./animation.ts";
import { Audio } from "./audio.ts";
import { Sticker } from "./sticker.ts";
import { Voice } from "./voice.ts";
import { Poll } from "./poll.ts";
import {PhotoSize} from "./photo_size.ts";

export class Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly reply_to_message?: Message;
  readonly text?: string;
  readonly entities?: MessageEntity[];
  readonly animation?: Animation;
  readonly audio?: Audio;
  readonly photo?: PhotoSize[];
  readonly sticker?: Sticker;
  readonly voice?: Voice;
  readonly poll?: Poll;
}
