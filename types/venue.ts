/**
 * This object represents a venue.
 *
 * @see https://core.telegram.org/bots/api#venue
 */
export interface Venue {
  /**
   * Venue location. Can't be a live location
   */
  readonly location: Location;

  /**
   * Name of the venue
   */
  readonly title: string;

  /**
   * Address of the venue
   */
  readonly address: string;

  /**
   * Foursquare identifier of the venue
   */
  readonly foursquare_id?: string;

  /**
   * Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or
   * “food/icecream”.)
   */
  readonly foursquare_type?: string;

  /**
   * Google Places identifier of the venue
   */
  readonly google_place_id?: string;

  /**
   * Google Places type of the venue. (See supported types.)
   */
  readonly google_place_type?: string;
}
