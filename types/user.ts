export class User {
  readonly id!: bigint;
  readonly is_bot!: boolean;
  readonly first_name!: string;
  readonly last_name?: string;
  readonly username?: string;
  readonly language_code?: string;
  readonly can_join_groups?: boolean;
  readonly can_read_all_group_messages?: boolean;
  readonly supports_inline_queries?: boolean;
}
