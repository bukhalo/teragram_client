import { Chat } from "./chat.ts";
import { User } from "./user.ts";
import { ChatMember } from "./chat_member.ts";
import { ChatInviteLink } from "./chat_invite_link.ts";

/**
 * This object represents changes in the status of a chat member.
 *
 * @see https://core.telegram.org/bots/api#chatmemberupdated
 */
export interface ChatMemberUpdated {
  /**
   * Chat the user belongs to
   */
  readonly chat: Chat;

  /**
   * Performer of the action, which resulted in the change
   */
  readonly from: User;

  /**
   * Date the change was done in Unix time
   */
  readonly date: number;

  /**
   * Previous information about the chat member
   */
  readonly old_chat_member: ChatMember;

  /**
   * New information about the chat member
   */
  readonly new_chat_member: ChatMember;

  /**
   * Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
   */
  readonly invite_link?: ChatInviteLink;
}
