export enum ChatType {
  PRIVATE = "private",
  GROUP = "group",
  SUPERGROUP = "supergroup",
  CHANNEL = "channel",
}

export class Chat {
  readonly id!: number;
  readonly type!: ChatType;
}
