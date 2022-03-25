/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some
 * default or trending results.
 *
 * @see https://core.telegram.org/bots/api#inlinequery
 */
import { User } from "./user.ts";
import { ChatType } from "./chat.ts";
import { Location } from "./location.ts";

export interface InlineQuery {
  /**
   * Unique identifier for this query
   */
  readonly id: string;

  /**
   * Sender
   */
  readonly from: User;

  /**
   * Text of the query (up to 256 characters)
   */
  readonly query: string;

  /**
   * Offset of the results to be returned, can be controlled by the bot
   */
  readonly offset: string;

  /**
   * Type of the chat, from which the inline query was sent. Can be either “sender” for a private chat with the inline
   * query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests
   * sent from official clients and most third-party clients, unless the request was sent from a secret chat
   */
  readonly chat_type?: ChatType;

  /**
   * Sender location, only for bots that request user location
   */
  readonly location?: Location;
}
