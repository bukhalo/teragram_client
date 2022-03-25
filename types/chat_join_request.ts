/**
 * Represents a join request sent to a chat.
 *
 * @see https://core.telegram.org/bots/api#chatjoinrequest
 */
import { Chat } from "./chat.ts";
import { User } from "./user.ts";
import { ChatInviteLink } from "./chat_invite_link.ts";

export interface ChatJoinRequest {
  /**
   * Chat to which the request was sent
   */
  readonly chat: Chat;

  /**
   * User that sent the join request
   */
  readonly from: User;

  /**
   * Date the request was sent in Unix time
   */
  readonly date: number;

  /**
   * Bio of the user.
   */
  readonly bio?: string;

  /**
   * Chat invite link that was used by the user to send the join request
   */
  readonly invite_link?: ChatInviteLink;
}
