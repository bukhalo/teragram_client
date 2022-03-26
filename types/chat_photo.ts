/**
 * This object represents a chat photo.
 *
 * @see https://core.telegram.org/bots/api#chatphoto
 */
export interface ChatPhoto {
  /**
   * File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as
   * long as the photo is not changed.
   */
  readonly small_file_id: string;

  /**
   * Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for
   * different bots. Can't be used to download or reuse the file.
   */
  readonly small_file_unique_id: string;

  /**
   * File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as
   * long as the photo is not changed.
   */
  readonly big_file_id: string;

  /**
   * Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different
   * bots. Can't be used to download or reuse the file.
   */
  readonly big_file_unique_id: string;
}
