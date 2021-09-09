import { Update } from "./types/updates.ts";
import { GetMe, GetUpdatesParams, SendMessage, SendMessageParams } from "./types/params.ts";

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
      requestOptions
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
      params
    );
  }

  public sendMessage(params: SendMessageParams): Promise<SendMessage> {
    return this.apiCall<SendMessage, SendMessageParams>(this.sendMessage.name, params);
  }
}
