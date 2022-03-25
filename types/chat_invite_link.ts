import { User } from "./user.ts";

/**
 * Represents an invite link for a chat.
 *
 * @see https://core.telegram.org/bots/api#chatinvitelink
 */
export interface ChatInviteLink {
  /**
   * The invite link. If the link was created by another chat administrator, then the second part of the link will be
   * replaced with “…”.
   */
  readonly invite_link: string;

  /**
   * Creator of the link
   */
  readonly creator: User;

  /**
   * True, if users joining the chat via the link need to be approved by chat administrators
   */
  readonly creates_join_request: boolean;

  /**
   * True, if the link is primary
   */
  readonly is_primary: boolean;

  /**
   * True, if the link is revoked
   */
  readonly is_revoked: boolean;

  /**
   * Invite link name
   */
  readonly name?: string;

  /**
   * Point in time (Unix timestamp) when the link will expire or has been expired
   */
  readonly expire_date?: number;

  /**
   * Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite
   * link; 1-99999
   */
  readonly member_limit?: number;

  /**
   * Number of pending join requests created using this link
   */
  readonly pending_join_request_count?: number;
}
