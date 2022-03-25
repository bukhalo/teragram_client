import { ChatMemberStatus } from "./chat_member_status.ts";
import { User } from "./user.ts";

/**
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 *
 * @see https://core.telegram.org/bots/api#chatmemberbanned
 */
export interface ChatMemberBanned {
  /**
   * The member's status in the chat, always “kicked”
   */
  readonly status: ChatMemberStatus.KICKED;

  /**
   * Information about the user
   */
  readonly user: User;

  /**
   * Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever
   */
  readonly until_date: number;
}
