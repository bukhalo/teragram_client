import { User } from "./user.ts";
import { Message } from "./message.ts";
import { Chat } from "./chat.ts";
import { ParseMode } from "./parse_mode.ts";
import { ChatAction } from "./chat_action.ts";
import { InlineKeyboardMarkup } from "./inline_keyboard_markup.ts";
import { ReplyKeyboardMarkup } from "./reply_keyboard_markup.ts";
import { ReplyKeyboardRemove } from "./reply_keyboard_remove.ts";
import { ForceReply } from "./force_reply.ts";
import { Sticker } from "./sticker.ts";
import { MessageEntity } from "./message_entity.ts";
import { Audio } from "./audio.ts";
import { Voice } from "./voice.ts";
import { Animation } from "./animation.ts";
import { Poll } from "./poll.ts";

export class GetMe implements User {
  readonly id!: number;
  readonly is_bot!: boolean;
  readonly first_name!: string;
  readonly last_name?: string;
  readonly username?: string;
  readonly language_code?: string;
  readonly can_join_groups!: boolean;
  readonly can_read_all_group_messages!: boolean;
  readonly supports_inline_queries!: boolean;
}

export class GetUpdatesParams {
  offset?: number;
  limit?: number;
  timeout?: number;
  allowed_updates?: string[];
}

export class SendMessage implements Message {
  readonly message_id!: number;
  readonly from!: User;
  readonly chat!: Chat;
  readonly reply_to_message?: Message;
  readonly text!: string;
}

export class SendMessageParams {
  chat_id!: number | string;
  text!: string;
  parse_mode?: ParseMode;
  // entities?: any;
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  // reply_markup?: any;
}

export class SendPhoto implements Message {
  readonly message_id!: number;
  readonly from!: User;
  readonly chat!: Chat;
  readonly reply_to_message?: Message;
  readonly text!: string;
}

export class SendPhotoParams {
  chat_id!: number | string;
  photo!: string;
  caption?: string;
  parse_mode?: ParseMode;
  // caption_entities?: any;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  // reply_markup?: any;
}

export class SendAudio implements Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly audio!: Audio;
}

export class SendAudioParams {
  chat_id!: number | string;
  audio!: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  duration?: number;
  performer?: string;
  title?: string;
  thumb?: string;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export class SendVoice implements Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly voice!: Voice;
}

export class SendVoiceParams {
  chat_id!: number | string;
  voice!: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  duration?: number;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export class SendAnimation implements Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly animation!: Animation;
}

export class SendAnimationParams {
  chat_id!: number | string;
  animation!: string;
  duration?: number;
  width?: number;
  height?: number;
  thumb?: string;
  caption?: string;
  parse_mode?: ParseMode;
  caption_entities?: MessageEntity[];
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export class SendPoll implements Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly poll!: Poll;
}

export class SendPollParams {
  chat_id!: number | string;
  question!: string;
  options!: string[];
  is_anonymous?: boolean;
  type?: string;
  allows_multiple_answers?: boolean;
  correct_option_id?: number;
  explanation?: string;
  explanation_parse_mode?: string;
  explanation_entities?: MessageEntity[];
  open_period?: number;
  close_date?: number;
  is_closed?: boolean;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export class SendChatActionParams {
  chat_id!: number | string;
  action!: ChatAction;
}

export class SendSticker implements Message {
  readonly message_id!: number;
  readonly from?: User;
  readonly chat!: Chat;
  readonly sticker!: Sticker;
}

export class SendStickerParams {
  chat_id!: number | string;
  sticker!: string;
  disable_notification?: boolean;
  protect_content?: boolean;
  reply_to_message_id?: number;
  allow_sending_without_reply?: boolean;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}
