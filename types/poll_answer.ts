/**
 * This object represents an answer of a user in a non-anonymous poll.
 *
 * @see https://core.telegram.org/bots/api#pollanswer
 */
import { User } from "./user.ts";

export interface PollAnswer {
  /**
   * Unique poll identifier
   */
  readonly poll_id: number;

  /**
   * The user, who changed the answer to the poll
   */
  readonly user: User;

  /**
   * 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote.
   */
  readonly option_ids: number[];
}
