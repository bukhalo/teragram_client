import { ChatMemberStatus } from "./chat_member_status.ts";
import { User } from "./user.ts";

/**
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 *
 * @see https://core.telegram.org/bots/api#chatmemberrestricted
 */
export interface ChatMemberRestricted {
  /**
   * The member's status in the chat, always “restricted”
   */
  readonly status: ChatMemberStatus.RESTRICTED;

  /**
   * Information about the user
   */
  readonly user: User;

  /**
   * True, if the user is a member of the chat at the moment of the request
   */
  readonly is_member: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  readonly can_change_info: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  readonly can_invite_users: boolean;

  /**
   * True, if the user is allowed to pin messages
   */
  readonly can_pin_messages: boolean;

  /**
   * True, if the user is allowed to send text messages, contacts, locations and venues
   */
  readonly can_send_messages: boolean;

  /**
   * True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes
   */
  readonly can_send_media_messages: boolean;

  /**
   * True, if the user is allowed to send polls
   */
  readonly can_send_polls: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline bots
   */
  readonly can_send_other_messages: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages
   */
  readonly can_add_web_page_previews: boolean;

  /**
   * Date when restrictions will be lifted for this user; unix time. If 0, then the user is restricted forever
   */
  readonly until_date: number;
}
