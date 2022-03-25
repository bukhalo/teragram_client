import { ChatMemberStatus } from "./chat_member_status.ts";
import { User } from "./user.ts";

/**
 * Represents a chat member that has no additional privileges or restrictions.
 *
 * @see https://core.telegram.org/bots/api#chatmembermember
 */
export interface ChatMemberMember {
  /**
   * The member's status in the chat, always “member”
   */
  readonly status: ChatMemberStatus.MEMBER;

  /**
   * Information about the user
   */
  readonly user: User;
}
