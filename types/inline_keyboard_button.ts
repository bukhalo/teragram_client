import { LoginUrl } from "./login_url.ts";
import { CallbackGame } from "./callback_game.ts";

export class InlineKeyboardButton {
  text!: string;
  url?: string;
  login_url?: LoginUrl;
  callback_data?: string;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  callback_game?: CallbackGame;
  pay?: boolean;
}
