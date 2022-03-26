/**
 * Contains data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport
 * Documentation for a complete description of the data decryption and authentication processes.
 *
 * @see https://core.telegram.org/bots/api#encryptedcredentials
 */
export interface EncryptedCredentials {
  /**
   * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for
   * EncryptedPassportElement decryption and authentication
   */
  readonly data: string;

  /**
   * Base64-encoded data hash for data authentication
   */
  readonly hash: string;

  /**
   * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
   */
  readonly secret: string;
}
