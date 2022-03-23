import { KeyboardButton } from "./keyboard_button.ts";

export class ReplyKeyboardMarkup {
  keyboard!: KeyboardButton[][];
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  input_field_placeholder?: string;
  selective?: boolean;
}
