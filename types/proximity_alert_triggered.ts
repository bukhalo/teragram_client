/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 *
 * @see https://core.telegram.org/bots/api#proximityalerttriggered
 */
import { User } from "./user.ts";

export interface ProximityAlertTriggered {
  /**
   * User that triggered the alert
   */
  readonly traveler: User;

  /**
   * User that set the alert
   */
  readonly watcher: User;

  /**
   * The distance between the users
   */
  readonly distance: number;
}
