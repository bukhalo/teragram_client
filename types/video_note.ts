/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 *
 * @see https://core.telegram.org/bots/api#videonote
 */
import { PhotoSize } from "./photo_size.ts";

export interface VideoNote {
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
   * Video width and height (diameter of the video message) as defined by sender
   */
  readonly length: number;

  /**
   * Duration of the video in seconds as defined by sender
   */
  readonly duration: number;

  /**
   * Video thumbnail
   */
  readonly thumb?: PhotoSize;

  /**
   * File size in bytes
   */
  readonly file_size?: number;
}
