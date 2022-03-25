import { assert, assertObjectMatch } from "./deps_test.ts";
import { Client } from "./client.ts";

const { test, env } = Deno;

test({
  name: "construct Client()",
  fn() {
    const client = new Client(env.get("TOKEN")!);
    assert(client instanceof Client);
  },
});

test({
  name: "getMe()",
  async fn() {
    const client = new Client(env.get("TOKEN")!);
    const res = await client.getMe();

    assertObjectMatch(
      res,
      {
        id: 5186549901,
        is_bot: true,
        first_name: "Tegragram Test Bot",
        username: "teragram_test_bot",
        can_join_groups: true,
        can_read_all_group_messages: false,
        supports_inline_queries: false,
      },
    );
  },
});
