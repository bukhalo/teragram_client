/**
 * This object represents a point on the map.
 *
 * @see https://core.telegram.org/bots/api#location
 */
export interface Location {
  /**
   * Longitude as defined by sender
   */
  readonly longitude: number;

  /**
   * Latitude as defined by sender
   */
  readonly latitude: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  readonly horizontal_accuracy?: number;

  /**
   * Time relative to the message sending date, during which the location can be updated; in seconds. For active live
   * locations only.
   */
  readonly live_period?: number;

  /**
   * The direction in which user is moving, in degrees; 1-360. For active live locations only.
   */
  readonly heading?: number;

  /**
   * Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations
   * only.
   */
  readonly proximity_alert_radius?: number;
}
