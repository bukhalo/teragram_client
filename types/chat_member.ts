import { ChatMemberOwner } from "./chat_member_owner.ts";
import { ChatMemberAdministrator } from "./chat_member_administrator.ts";
import { ChatMemberMember } from "./chat_member_member.ts";
import { ChatMemberRestricted } from "./chat_member_restricted.ts";
import { ChatMemberLeft } from "./chat_member_left.ts";
import { ChatMemberBanned } from "./chat_member_banned.ts";

/**
 * This object contains information about one member of a chat.
 *
 * @see https://core.telegram.org/bots/api#chatmember
 */
export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;
