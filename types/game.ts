/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 *
 * @see https://core.telegram.org/bots/api#game
 */
import { PhotoSize } from "./photo_size.ts";
import { MessageEntity } from "./message_entity.ts";
import { Animation } from "./animation.ts";

export interface Game {
  /**
   * Title of the game
   */
  readonly title: string;

  /**
   * Description of the game
   */
  readonly description: string;

  /**
   * Photo that will be displayed in the game message in chats.
   */
  readonly photo: PhotoSize[];

  /**
   * Brief description of the game or high scores included in the game message. Can be automatically edited to include
   * current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText.
   * 0-4096 characters.
   */
  readonly text?: string;

  /**
   * Special entities that appear in text, such as usernames, URLs, bot commands, etc.
   */
  readonly text_entities?: MessageEntity[];

  /**
   * Animation that will be displayed in the game message in chats. Upload via BotFather
   */
  readonly animation?: Animation;
}
