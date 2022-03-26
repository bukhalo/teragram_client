/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 *
 * @see https://core.telegram.org/bots/api#photosize
 */
export interface PhotoSize {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  readonly file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used
   * to download or reuse the file.
   */
  readonly file_unique_id: string;

  /**
   * Photo width
   */
  readonly width: number;

  /**
   * Photo height
   */
  readonly height: number;

  /**
   * File size in bytes
   */
  readonly file_size?: number;
}
