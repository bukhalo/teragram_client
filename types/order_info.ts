/**
 * This object represents information about an order.
 *
 * @see https://core.telegram.org/bots/api#orderinfo
 */
import { ShippingAddress } from "./shipping_address.ts";

export interface OrderInfo {
  /**
   * User name
   */
  readonly name?: string;

  /**
   * User's phone number
   */
  readonly phone_number?: string;

  /**
   * User email
   */
  readonly email?: string;

  /**
   * User shipping address
   */
  readonly shipping_address?: ShippingAddress;
}
