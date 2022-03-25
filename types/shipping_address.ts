/**
 * This object represents a shipping address.
 *
 * @see https://core.telegram.org/bots/api#shippingaddress
 */
export interface ShippingAddress {
  /**
   * ISO 3166-1 alpha-2 country code
   */
  readonly country_code: string;

  /**
   * State, if applicable
   */
  readonly state: string;

  /**
   * City
   */
  readonly city: string;

  /**
   * First line for the address
   */
  readonly street_line1: string;

  /**
   * Second line for the address
   */
  readonly street_line2: string;

  /**
   * Address post code
   */
  readonly post_code: string;
}
