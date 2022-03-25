/**
 * This object contains information about an incoming shipping query.
 *
 * @see https://core.telegram.org/bots/api#shippingquery
 */
import { User } from "./user.ts";
import { ShippingAddress } from "./shipping_address.ts";

export interface ShippingQuery {
  /**
   * Unique query identifier
   */
  readonly id: string;

  /**
   * User who sent the query
   */
  readonly from: User;

  /**
   * Bot specified invoice payload
   */
  readonly invoice_payload: string;

  /**
   * User specified shipping address
   */
  readonly shipping_address: ShippingAddress;
}
