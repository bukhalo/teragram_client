import { EncryptedPassportElement } from "./encrypted_passport_element.ts";
import { EncryptedCredentials } from "./encrypted_credentials.ts";

/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 *
 * @see https://core.telegram.org/bots/api#passportdata
 */
export interface PassportData {
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   */
  readonly data: EncryptedPassportElement[];

  /**
   * Encrypted credentials required to decrypt the data
   */
  readonly credentials: EncryptedCredentials;
}
