import { Update } from "./types/updates.ts";
import {
  GetMe,
  GetUpdatesParams,
  SendAnimationParams,
  SendAudioParams,
  SendChatActionParams,
  SendMessageParams,
  SendPhotoParams,
  SendPollParams,
  SendStickerParams,
  SendVoiceParams,
} from "./types/params.ts";
import { Message } from "./types/message.ts";

export class Client {
  constructor(private readonly token: string) {}

  private async apiCall<R, P = null>(method: string, params?: P): Promise<R> {
    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        connection: "keep-alive",
      },
      body: JSON.stringify(params),
    };
    if (!params) {
      requestOptions.method = "GET";
      requestOptions.body = null;
    }
    const req = await fetch(
      `https://api.telegram.org/bot${this.token}/${method}`,
      requestOptions,
    );
    const data = await req.json();
    return data.result;
  }

  /**
   * A simple method for testing your bot's authentication token.
   */
  public getMe(): Promise<GetMe> {
    return this.apiCall<GetMe>(this.getMe.name);
  }

  /**
   * Use this method to receive incoming updates using long polling.
   *
   * @see https://core.telegram.org/bots/api#getupdates
   */
  public getUpdates(params: GetUpdatesParams): Promise<Update[]> {
    return this.apiCall<Update[], GetUpdatesParams>(
      this.getUpdates.name,
      params,
    );
  }

  /**
   * Use this method to send text messages
   *
   * @see https://core.telegram.org/bots/api#sendmessage
   */
  public sendMessage(params: SendMessageParams): Promise<Message> {
    return this.apiCall<Message, SendMessageParams>(
      this.sendMessage.name,
      params,
    );
  }

  /**
   * Use this method to send photos.
   *
   * @see https://core.telegram.org/bots/api#sendphoto
   */
  public sendPhoto(params: SendPhotoParams): Promise<Message> {
    return this.apiCall<Message, SendPhotoParams>(
      this.sendPhoto.name,
      params,
    );
  }

  /**
   * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio
   * must be in the .MP3 or .M4A format. Bots can currently send audio files of up to 50 MB in size, this limit may be
   * changed in the future.
   *
   * @see https://core.telegram.org/bots/api#sendaudio
   */
  public sendAudio(params: SendAudioParams): Promise<Message> {
    return this.apiCall<Message, SendAudioParams>(
      this.sendAudio.name,
      params,
    );
  }

  /**
   * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). Bots can currently send
   * animation files of up to 50 MB in size, this limit may be changed in the future.
   *
   * @see https://core.telegram.org/bots/api#sendanimation
   */
  public sendAnimation(params: SendAnimationParams): Promise<Message> {
    return this.apiCall<Message, SendAnimationParams>(
      this.sendAnimation.name,
      params,
    );
  }

  /**
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message.
   * For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or
   * Document). Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   *
   * @see https://core.telegram.org/bots/api#sendvoice
   */
  public sendVoice(params: SendVoiceParams): Promise<Message> {
    return this.apiCall<Message, SendVoiceParams>(
      this.sendVoice.name,
      params,
    );
  }

  /**
   * Use this method to send a native poll.
   *
   * @see https://core.telegram.org/bots/api#sendpoll
   */
  public sendPoll(params: SendPollParams): Promise<Message> {
    return this.apiCall<Message, SendPollParams>(this.sendPoll.name, params);
  }

  /**
   * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for
   * 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
   *
   * @see https://core.telegram.org/bots/api#sendchataction
   */
  public sendChatAction(params: SendChatActionParams): Promise<true> {
    return this.apiCall<true, SendChatActionParams>(
      this.sendChatAction.name,
      params,
    );
  }

  /**
   * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers.
   *
   * @see https://core.telegram.org/bots/api#sendsticker
   */
  public sendSticker(params: SendStickerParams): Promise<Message> {
    return this.apiCall<Message, SendStickerParams>(
      this.sendSticker.name,
      params,
    );
  }
}
