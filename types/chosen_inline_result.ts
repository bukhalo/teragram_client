/**
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 *
 * @see https://core.telegram.org/bots/api#choseninlineresult
 */
import { User } from "./user.ts";
import { Location } from "./location.ts";

export interface ChosenInlineResult {
  /**
   * The unique identifier for the result that was chosen
   */
  readonly result_id: string;

  /**
   * The user that chose the result
   */
  readonly from: User;

  /**
   * Sender location, only for bots that require user location
   */
  readonly location?: Location;

  /**
   * Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message.
   * Will be also received in callback queries and can be used to edit the message.
   */
  readonly inline_message_id?: string;

  /**
   * The query that was used to obtain the result
   */
  readonly query?: string;
}
