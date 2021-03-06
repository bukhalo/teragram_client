import { LoginUrl } from "./login_url.ts";
import { CallbackGame } from "./callback_game.ts";

/**
 * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 *
 * @see https://core.telegram.org/bots/api#inlinekeyboardbutton
 */
export interface InlineKeyboardButton {
  /**
   * Label text on the button
   */
  readonly text: string;

  /**
   * HTTP or tg:// url to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a
   * user by their ID without using a username, if this is allowed by their privacy settings.
   */
  readonly url?: string;

  /**
   * An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
   */
  readonly login_url?: LoginUrl;

  /**
   * Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
   */
  readonly callback_data?: string;

  /**
   * If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's
   * username and the specified inline query in the input field. Can be empty, in which case just the bot's username
   * will be inserted.
   *
   * Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private
   * chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be
   * automatically returned to the chat they switched from, skipping the chat selection screen.
   */
  readonly switch_inline_query?: string;

  /**
   * If set, pressing the button will insert the bot's username and the specified inline query in the current chat's
   * input field. Can be empty, in which case only the bot's username will be inserted.
   *
   * This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting
   * something from multiple options.
   */
  readonly switch_inline_query_current_chat?: string;

  /**
   * Description of the game that will be launched when the user presses the button.
   *
   * NOTE: This type of button must always be the first button in the first row.
   */
  readonly callback_game?: CallbackGame;

  /**
   * Specify True, to send a Pay button.
   *
   * NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages.
   */
  readonly pay?: boolean;
}
