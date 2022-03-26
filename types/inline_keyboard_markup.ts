import { InlineKeyboardButton } from "./inline_keyboard_button.ts";

/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 *
 * @see https://core.telegram.org/bots/api#inlinekeyboardmarkup
 */
export interface InlineKeyboardMarkup {
  /**
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects
   */
  readonly inline_keyboard: InlineKeyboardButton[][];
}
