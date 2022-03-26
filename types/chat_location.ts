import { Location } from "./location.ts";

/**
 * Represents a location to which a chat is connected.
 *
 * @see https://core.telegram.org/bots/api#chatlocation
 */
export interface ChatLocation {
  /**
   * The location to which the supergroup is connected. Can't be a live location.
   */
  readonly location: Location;

  /**
   * Location address; 1-64 characters, as defined by the chat owner
   */
  readonly address: string;
}
