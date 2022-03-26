import { PhotoSize } from "./photo_size.ts";
import { MaskPosition } from "./mask_position.ts";

/**
 * This object represents a sticker.
 *
 * @see https://core.telegram.org/bots/api#sticker
 */
export interface Sticker {
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
   * Sticker width
   */
  readonly width: number;

  /**
   * Sticker height
   */
  readonly height: number;

  /**
   * True, if the sticker is animated
   */
  readonly is_animated: boolean;

  /**
   * True, if the sticker is a video sticker
   */
  readonly is_video: boolean;

  /**
   * Sticker thumbnail in the .WEBP or .JPG format
   */
  readonly thumb?: PhotoSize;

  /**
   * Emoji associated with the sticker
   */
  readonly emoji?: string;

  /**
   * Name of the sticker set to which the sticker belongs
   */
  readonly set_name?: string;

  /**
   * For mask stickers, the position where the mask should be placed
   */
  readonly mask_position?: MaskPosition;

  /**
   * File size in bytes
   */
  readonly file_size?: number;
}
