import { mainTestFn, test } from "@lbu/cli";
import { isNil, uuid } from "@lbu/stdlib";
import {
  cleanupTestPostgresDatabase,
  createTestPostgresDatabase,
} from "@lbu/store";

mainTestFn(import.meta);

test("code-gen/e2e/sql", async (t) => {
  const client = await import("../../../generated/testing/sql/index.js");

  let sql = undefined;

  t.test("create a test db", async (t) => {
    sql = await createTestPostgresDatabase();
    t.ok(!!sql);

    const result = await sql`
      SELECT 1 + 2 AS sum
    `;
    t.equal(result[0].sum, 3);
  });

  let user, category, post;

  t.test("insert user", async (t) => {
    const [dbUser] = await client.queries.userInsert(sql, {
      nickName: "test",
      authKey: uuid(),
      email: "test@test.com",
    });

    t.ok(dbUser);
    t.ok(isNil(dbUser.deletedAt));
    t.equal(dbUser.nickName, "test");

    user = dbUser;
  });

  t.test("insert category", async (t) => {
    const [dbCategory] = await client.queries.categoryInsert(sql, [
      {
        label: "Category A",
      },
      {
        label: "Category B",
      },
    ]);

    t.ok(dbCategory);
    t.equal(dbCategory.label, "Category A");
    category = dbCategory;
  });

  t.test("insert posts", async (t) => {
    const [dbPost1, dbPost2] = await client.queries.postInsert(sql, [
      {
        writer: user.id,
        title: "Post 1",
        body: "Body 1",
      },
      {
        writer: user.id,
        title: "Post 2",
        body: "Body 2",
      },
    ]);

    t.ok(dbPost1);
    t.ok(dbPost2);

    t.equal(dbPost1.writer, user.id);
    t.equal(dbPost2.writer, user.id);

    await client.queries.postCategoryInsert(sql, [
      {
        category: category.id,
        post: dbPost1.id,
      },
      {
        category: category.id,
        post: dbPost2.id,
      },
    ]);

    post = dbPost1;
  });

  t.test("add category meta", async (t) => {
    const categories = await client.queries.categorySelect(sql);

    for (const cat of categories) {
      await client.queries.categoryMetaInsert(sql, {
        category: cat.id,
        postCount: await client.queries.postCategoryCount(sql, {
          category: cat.id,
        }),
        isHighlighted: category.id !== cat.id,
      });
    }

    t.equal(await client.queries.categoryMetaCount(sql), 2);
  });

  t.test("get posts for user", async (t) => {
    const result = await client
      .traversePost({ id: post.id })
      .getWriter()
      .getPosts()
      .exec(sql);

    t.equal(result.length, 2);
  });

  t.test("update user nick name", async (t) => {
    const [dbUser] = await client.queries.userUpdate(
      sql,
      { nickName: "TestUser" },
      { id: user.id },
    );

    t.notEqual(dbUser.updatedAt.getTime(), user.updatedAt.getTime());
    t.equal(dbUser.nickName, "TestUser");
  });

  t.test("query filter by 'in' statements", async () => {
    await client.queries.userSelect(sql, {
      createdAtIn: [new Date()],
      emailIn: ["Test@test.com"],
      idNotIn: [uuid()],
    });
  });

  t.test("soft delete post", async (t) => {
    const originalCount = await client.queries.postCount(sql);
    await client.queries.postDelete(sql, { id: post.id });
    const newCount = await client.queries.postCount(sql);
    const newCountWithDeleted = await client.queries.postCount(sql, {
      deletedAtIncludeNotNull: true,
    });

    t.notEqual(originalCount, newCount);
    t.equal(originalCount, newCountWithDeleted);
  });

  t.test("soft delete user", async (t) => {
    await client.queries.userDelete(sql, { id: user.id });

    const userCount = await client.queries.userCount(sql);
    t.equal(userCount, 0);

    const postCount = await client.queries.postCount(sql);
    t.equal(postCount, 0, "soft cascading deletes");
  });

  t.test("destroy test db", async (t) => {
    await cleanupTestPostgresDatabase(sql);
    t.ok(true);
  });
});