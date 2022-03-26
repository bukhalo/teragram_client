import { OrderInfo } from "./order_info.ts";

/**
 * This object contains basic information about a successful payment.
 *
 * @see https://core.telegram.org/bots/api#successfulpayment
 */
export interface SuccessfulPayment {
  /**
   * Three-letter ISO 4217 currency code
   */
  readonly currency: string;

  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of
   * US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the
   * decimal point for each currency (2 for the majority of currencies).
   */
  readonly total_amount: number;

  /**
   * Bot specified invoice payload
   */
  readonly invoice_payload: string;

  /**
   * Identifier of the shipping option chosen by the user
   */
  readonly shipping_option_id?: string;

  /**
   * Order info provided by the user
   */
  readonly order_info?: OrderInfo;

  /**
   * Telegram payment identifier
   */
  readonly telegram_payment_charge_id?: string;

  /**
   * Provider payment identifier
   */
  readonly provider_payment_charge_id?: string;
}
