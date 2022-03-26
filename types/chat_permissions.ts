/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 *
 * @see https://core.telegram.org/bots/api#chatpermissions
 */
export interface ChatPermissions {
  /**
   * True, if the user is allowed to send text messages, contacts, locations and venues
   */
  readonly can_send_messages?: boolean;

  /**
   * True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
   */
  readonly can_send_media_messages?: boolean;

  /**
   * True, if the user is allowed to send polls, implies can_send_messages
   */
  readonly can_send_polls?: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages
   */
  readonly can_send_other_messages?: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages
   */
  readonly can_add_web_page_previews?: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
   */
  readonly can_change_info?: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  readonly can_invite_users?: boolean;

  /**
   * True, if the user is allowed to pin messages. Ignored in public supergroups
   */
  readonly can_pin_messages?: boolean;
}
