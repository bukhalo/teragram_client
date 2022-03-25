import { PollOption } from "./poll_option.ts";
import { MessageEntity } from "./message_entity.ts";
import { PollType } from "./poll_type.ts";

/**
 * This object contains information about a poll.
 *
 * @see https://core.telegram.org/bots/api#poll
 */
export interface Poll {
  /**
   * Unique poll identifier
   */
  readonly id: string;

  /**
   * Poll question, 1-300 characters
   */
  readonly question: string;

  /**
   * List of poll options
   */
  readonly options: PollOption[];

  /**
   * Total number of users that voted in the poll
   */
  readonly total_voter_count: number;

  /**
   * True, if the poll is closed
   */
  readonly is_closed: boolean;

  /**
   * True, if the poll is anonymous
   */
  readonly is_anonymous: boolean;

  /**
   * Poll type, currently can be “regular” or “quiz”
   */
  readonly type: PollType;

  /**
   * True, if the poll allows multiple answers
   */
  readonly allows_multiple_answers: boolean;

  /**
   * 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or
   * was sent (not forwarded) by the bot or to the private chat with the bot.
   */
  readonly correct_option_id?: number;

  /**
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200
   * characters
   */
  readonly explanation?: string;

  /**
   * Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
   */
  readonly explanation_entities?: MessageEntity[];

  /**
   * Amount of time in seconds the poll will be active after creation
   */
  readonly open_period?: number;

  /**
   * Point in time (Unix timestamp) when the poll will be automatically closed
   */
  readonly close_date?: number;
}
