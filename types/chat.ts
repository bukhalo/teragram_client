export enum ChatType {
  PRIVATE = "private",
  GROUP = "group",
  SUPERGROUP = "supergroup",
  CHANNEL = "channel",
}

export class Chat {
  readonly id!: bigint;
  readonly type!: ChatType;
}
