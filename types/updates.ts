import { Message } from "./message.ts";
import { ChosenInlineResult } from "./chosen_inline_result.ts";
import { InlineQuery } from "./inline_query.ts";
import { CallbackQuery } from "./callback_query.ts";
import { ShippingQuery } from "./shipping_query.ts";
import { PreCheckoutQuery } from "./pre_checkout_query.ts";
import { Poll } from "./poll.ts";
import { PollAnswer } from "./poll_answer.ts";
import { ChatMemberUpdated } from "./chat_member_updated.ts";
import { ChatJoinRequest } from "./chat_join_request.ts";

/**
 * This object represents an incoming update.
 *
 * @see https://core.telegram.org/bots/api#update
 */
export interface BasicUpdate {
  /**
   * The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially.
   * This ID becomes especially handy if you're using Webhooks, since it allows you to ignore repeated updates or to
   * restore the correct update sequence, should they get out of order. If there are no new updates for at least a week,
   * then identifier of the next update will be chosen randomly instead of sequentially.
   */
  readonly update_id: number;
}

export interface MessageUpdate extends BasicUpdate {
  /**
   * New incoming message of any kind — text, photo, sticker, etc.
   */
  readonly message: Message;
}

export interface EditedMessageUpdate extends BasicUpdate {
  /**
   * New version of a message that is known to the bot and was edited
   */
  readonly edited_message: Message;
}

export interface ChannelPostUpdate extends BasicUpdate {
  /**
   * New incoming channel post of any kind — text, photo, sticker, etc.
   */
  readonly channel_post: Message;
}

export interface ChannelPostUpdate extends BasicUpdate {
  /**
   * New incoming channel post of any kind — text, photo, sticker, etc.
   */
  readonly channel_post: Message;
}

export interface EditedChannelPostUpdate extends BasicUpdate {
  /**
   * New version of a channel post that is known to the bot and was edited
   */
  readonly edited_channel_post: Message;
}

export interface InlineQueryUpdate extends BasicUpdate {
  /**
   * New incoming inline query
   */
  readonly inline_query: InlineQuery;
}

export interface ChosenInlineResultUpdate extends BasicUpdate {
  /**
   * The result of an inline query that was chosen by a user and sent to their chat partner.
   */
  readonly chosen_inline_result: ChosenInlineResult;
}

export interface CallbackQueryUpdate extends BasicUpdate {
  /**
   * New incoming callback query
   */
  readonly callback_query: CallbackQuery;
}

export interface ShippingQueryUpdate extends BasicUpdate {
  /**
   * New incoming shipping query. Only for invoices with flexible price
   */
  readonly shipping_query: ShippingQuery;
}

export interface PreCheckoutQueryUpdate extends BasicUpdate {
  /**
   * New incoming pre-checkout query. Contains full information about checkout
   */
  readonly pre_checkout_query: PreCheckoutQuery;
}

export interface PollUpdate extends BasicUpdate {
  /**
   * New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot
   */
  readonly poll: Poll;
}

export interface PollAnswerUpdate extends BasicUpdate {
  /**
   * A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
   */
  readonly poll_answer: PollAnswer;
}

export interface MyChatMemberUpdate extends BasicUpdate {
  /**
   * The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
   */
  readonly my_chat_member: ChatMemberUpdated;
}

export interface ChatMemberUpdate extends BasicUpdate {
  /**
   * A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates.
   */
  readonly chat_member: ChatMemberUpdated;
}

export interface ChatJoinRequestUpdate extends BasicUpdate {
  /**
   * A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to
   * receive these updates.
   */
  readonly chat_join_request: ChatJoinRequest;
}

export type Update =
  | MessageUpdate
  | EditedMessageUpdate
  | ChannelPostUpdate
  | EditedChannelPostUpdate
  | InlineQueryUpdate
  | ChosenInlineResultUpdate
  | CallbackQueryUpdate
  | ShippingQueryUpdate
  | PreCheckoutQueryUpdate
  | PollUpdate
  | PollAnswerUpdate
  | MyChatMemberUpdate
  | ChatMemberUpdate
  | ChatJoinRequestUpdate;
