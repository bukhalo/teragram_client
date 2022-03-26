/**
 * This object represents a service message about new members invited to a voice chat.
 *
 * @see https://core.telegram.org/bots/api#voicechatparticipantsinvited
 */
import { User } from "./user.ts";

export interface VoiceChatParticipantsInvited {
  /**
   * New members that were invited to the voice chat
   */
  readonly users?: User[];
}
