/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 *
 * @see https://core.telegram.org/bots/api#document
 */
import { PhotoSize } from "./photo_size.ts";

export interface Document {
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
   * Document thumbnail as defined by sender
   */
  readonly thumb?: PhotoSize;

  /**
   * Original filename as defined by sender
   */
  readonly file_name?: string;

  /**
   * MIME type of the file as defined by sender
   */
  readonly mime_type?: string;

  /**
   * File size in bytes
   */
  readonly file_size?: number;
}
