/**
 * This object represents a service message about a voice chat ended in the chat.
 *
 * @see https://core.telegram.org/bots/api#voicechatended
 */
export interface VoiceChatEnded {
  /**
   * Voice chat duration in seconds
   */
  readonly duration: number;
}
