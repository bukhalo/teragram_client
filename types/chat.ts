import { ChatPhoto } from "./chat_photo.ts";
import { Message } from "./message.ts";
import { ChatPermissions } from "./chat_permissions.ts";
import { ChatLocation } from "./chat_location.ts";

export enum ChatType {
  SENDER = "sender",
  PRIVATE = "private",
  GROUP = "group",
  SUPERGROUP = "supergroup",
  CHANNEL = "channel",
}

/**
 * This object represents a chat.
 *
 * @see https://core.telegram.org/bots/api#chat
 */
export interface Chat {
  /**
   * Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages
   * may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit
   * integer or double-precision float type are safe for storing this identifier.
   */
  readonly id: number;

  /**
   * Type of chat, can be either “private”, “group”, “supergroup” or “channel”
   */
  readonly type: ChatType;

  /**
   * Title, for supergroups, channels and group chats
   */
  readonly title?: string;

  /**
   * Username, for private chats, supergroups and channels if available
   */
  readonly username?: string;

  /**
   *  First name of the other party in a private chat
   */
  readonly first_name?: string;

  /**
   * Last name of the other party in a private chat
   */
  readonly last_name?: string;

  /**
   * Chat photo. Returned only in getChat.
   */
  readonly photo?: ChatPhoto;

  /**
   * Bio of the other party in a private chat. Returned only in getChat.
   */
  readonly bio?: string;

  /**
   * True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in
   * chats with the user. Returned only in getChat.
   */
  readonly has_private_forwards?: boolean;

  /**
   * Description, for groups, supergroups and channel chats. Returned only in getChat.
   */
  readonly description?: string;

  /**
   * Primary invite link, for groups, supergroups and channel chats. Returned only in getChat.
   */
  readonly invite_link?: string;

  /**
   * The most recent pinned message (by sending date). Returned only in getChat.
   */
  readonly pinned_message?: Message;

  /**
   * Default chat member permissions, for groups and supergroups. Returned only in getChat.
   */
  readonly permissions?: ChatPermissions;

  /**
   * For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user; in
   * seconds. Returned only in getChat.
   */
  readonly slow_mode_delay?: number;

  /**
   * The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.
   */
  readonly message_auto_delete_time?: number;

  /**
   * True, if messages from the chat can't be forwarded to other chats. Returned only in getChat.
   */
  readonly has_protected_content?: true;

  /**
   * For supergroups, name of group sticker set. Returned only in getChat.
   */
  readonly sticker_set_name?: string;

  /**
   * True, if the bot can change the group sticker set. Returned only in getChat.
   */
  readonly can_set_sticker_set?: true;

  /**
   * Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for
   * supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have
   * difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or
   * double-precision float type are safe for storing this identifier. Returned only in getChat.
   */
  readonly linked_chat_id?: number;

  /**
   * Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat.
   */
  readonly location?: ChatLocation;
}
