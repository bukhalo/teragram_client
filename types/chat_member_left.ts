import { ChatMemberStatus } from "./chat_member_status.ts";
import { User } from "./user.ts";

/**
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 *
 * @see https://core.telegram.org/bots/api#chatmemberleft
 */
export interface ChatMemberLeft {
  /**
   * The member's status in the chat, always “left”
   */
  readonly status: ChatMemberStatus.LEFT;

  /**
   * Information about the user
   */
  readonly user: User;
}
