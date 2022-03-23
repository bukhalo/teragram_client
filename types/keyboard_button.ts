import { KeyboardButtonPollType } from "./keyboard_button_poll_type.ts";

export class KeyboardButton {
  text!: string;
  request_contact?: boolean;
  request_location?: boolean;
  request_poll?: KeyboardButtonPollType;
}
