import { User } from "./user.ts";
import { Message } from "./message.ts";
import { Chat } from "./chat.ts";
import { ParseMode } from "./parse_mode.ts";
import { ChatAction } from "./chat_action.ts";

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

export class SendChatActionParams {
  chat_id!: number | string;
  action!: ChatAction;
}
