import { ChatMemberStatus } from "./chat_member_status.ts";
import { User } from "./user.ts";

/**
 * Represents a chat member that has some additional privileges.
 *
 * @see https://core.telegram.org/bots/api#chatmemberadministrator
 */
export interface ChatMemberAdministrator {
  /**
   * The member's status in the chat, always “administrator”
   */
  readonly status: ChatMemberStatus.ADMINISTRATOR;

  /**
   * Information about the user
   */
  readonly user: User;

  /**
   * True, if the bot is allowed to edit administrator privileges of that user
   */
  readonly can_be_edited: boolean;

  /**
   * True, if the user's presence in the chat is hidden
   */
  readonly is_anonymous: boolean;

  /**
   * True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see
   * channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other
   * administrator privilege
   */
  readonly can_manage_chat: boolean;

  /**
   * True, if the administrator can delete messages of other users
   */
  readonly can_delete_messages: boolean;

  /**
   * True, if the administrator can manage voice chats
   */
  readonly can_manage_voice_chats: boolean;

  /**
   * True, if the administrator can restrict, ban or unban chat members
   */
  readonly can_restrict_members: boolean;

  /**
   * True, if the administrator can add new administrators with a subset of their own privileges or demote
   * administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by
   * the user)
   */
  readonly can_promote_members: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  readonly can_change_info: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  readonly can_invite_users: boolean;

  /**
   * True, if the administrator can post in the channel; channels only
   */
  readonly can_post_messages?: boolean;

  /**
   * True, if the administrator can edit messages of other users and can pin messages; channels only
   */
  readonly can_edit_messages?: boolean;

  /**
   * True, if the user is allowed to pin messages; groups and supergroups only
   */
  readonly can_pin_messages?: boolean;

  /**
   * Custom title for this user
   */
  readonly custom_title?: string;
}
