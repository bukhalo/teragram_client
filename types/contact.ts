/**
 * This object represents a phone contact.
 *
 * @see https://core.telegram.org/bots/api#contact
 */
export interface Contact {
  /**
   * Contact's phone number
   */
  readonly phone_number: string;

  /**
   * Contact's first name
   */
  readonly first_name: string;

  /**
   * Contact's last name
   */
  readonly last_name?: string;

  /**
   * Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming
   * languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a
   * 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  readonly user_id?: number;

  /**
   * Additional data about the contact in the form of a vCard
   */
  readonly vcard?: string;
}
