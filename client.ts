import { Update } from "./types/updates.ts";
import {
  GetMe,
  GetUpdatesParams,
  SendAnimation,
  SendAnimationParams,
  SendAudio,
  SendAudioParams,
  SendChatActionParams,
  SendMessage,
  SendMessageParams,
  SendPhoto,
  SendPhotoParams,
  SendPoll,
  SendPollParams,
  SendSticker,
  SendStickerParams,
  SendVoice,
  SendVoiceParams,
} from "./types/params.ts";

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

  public getMe(): Promise<GetMe> {
    return this.apiCall<GetMe>(this.getMe.name);
  }

  public getUpdates(params: GetUpdatesParams): Promise<Update[]> {
    return this.apiCall<Update[], GetUpdatesParams>(
      this.getUpdates.name,
      params,
    );
  }

  public sendMessage(params: SendMessageParams): Promise<SendMessage> {
    return this.apiCall<SendMessage, SendMessageParams>(
      this.sendMessage.name,
      params,
    );
  }

  public sendPhoto(params: SendPhotoParams): Promise<SendPhoto> {
    return this.apiCall<SendPhoto, SendPhotoParams>(
      this.sendPhoto.name,
      params,
    );
  }

  public sendAudio(params: SendAudioParams): Promise<SendAudio> {
    return this.apiCall<SendAudio, SendAudioParams>(
      this.sendAudio.name,
      params,
    );
  }

  public sendAnimation(params: SendAnimationParams): Promise<SendAnimation> {
    return this.apiCall<SendAnimation, SendAnimationParams>(
      this.sendAnimation.name,
      params,
    );
  }

  public sendVoice(params: SendVoiceParams): Promise<SendVoice> {
    return this.apiCall<SendVoice, SendVoiceParams>(
      this.sendVoice.name,
      params,
    );
  }

  public sendPoll(params: SendPollParams): Promise<SendPoll> {
    return this.apiCall<SendPoll, SendPollParams>(this.sendPoll.name, params);
  }

  public sendChatAction(params: SendChatActionParams): Promise<boolean> {
    return this.apiCall<boolean, SendChatActionParams>(
      this.sendChatAction.name,
      params,
    );
  }

  public sendSticker(params: SendStickerParams): Promise<SendSticker> {
    return this.apiCall<SendSticker, SendStickerParams>(
      this.sendSticker.name,
      params,
    );
  }
}
