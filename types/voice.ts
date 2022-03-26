/**
 * This object represents a voice note.
 *
 * @see https://core.telegram.org/bots/api#voice
 */
export interface Voice {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  readonly file_id: string;

  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  readonly file_unique_id: string;

  /**
   * Duration of the audio in seconds as defined by sender
   */
  readonly duration: number;

  /**
   * MIME type of the file as defined by sender
   */
  readonly mime_type?: string;

  /**
   * File size in bytes
   */
  readonly file_size?: number;
}
