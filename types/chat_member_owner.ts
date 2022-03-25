import { User } from "./user.ts";
import { ChatMemberStatus } from "./chat_member_status.ts";

/**
 * Represents a chat member that owns the chat and has all administrator privileges.
 *
 * @see https://core.telegram.org/bots/api#chatmemberowner
 */
export interface ChatMemberOwner {
  /**
   * The member's status in the chat, always “creator”
   */
  readonly status: ChatMemberStatus.CREATOR;

  /**
   * Information about the user
   */
  readonly user: User;

  /**
   * True, if the user's presence in the chat is hidden
   */
  readonly is_anonymous: boolean;

  /**
   * Custom title for this user
   */
  readonly custom_title?: string;
}
