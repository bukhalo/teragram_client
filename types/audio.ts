import { PhotoSize } from "./photo_size.ts";

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 *
 * @see https://core.telegram.org/bots/api#audio
 */
export interface Audio {
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
   * Duration of the audio in seconds as defined by sender
   */
  readonly duration: number;

  /**
   * Performer of the audio as defined by sender or by audio tags
   */
  readonly performer?: string;

  /**
   * Title of the audio as defined by sender or by audio tags
   */
  readonly title?: string;

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

  /**
   * Thumbnail of the album cover to which the music file belongs
   */
  readonly thumb?: PhotoSize;
}
