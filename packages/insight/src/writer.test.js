import test from "tape";
import { writeNDJSON, writePretty } from "./writer.js";

test("insight/writer", (t) => {
  t.test("writePretty", (t) => {
    const now = new Date();
    let result = [];
    const mock = {
      write: (arg) => {
        result.push(arg);
      },
    };

    writePretty(mock, "info", now, {}, {});

    t.equal(result.length, 6);
    t.match(result[0], /\d{2}:\d{2}:\d{2}.\d{3}/);
    t.equal(result[1].trim(), "");
    t.ok(result[2].indexOf("info") !== -1, "should print log level");

    result = [];
    writePretty(
      mock,
      "info",
      now,
      { type: "foo" },
      {
        foo: { bar: { baz: "quix" } },
      },
    );

    t.equal(result.length, 6);
    t.ok(result[2].indexOf("foo") !== -1, "should print log type");

    t.end();
  });

  t.test("writeNDJSON", (t) => {
    const now = new Date();
    let result = [];
    const mock = {
      write: (arg) => {
        result.push(arg);
      },
    };

    writeNDJSON(mock, "info", now, {}, {});

    t.equal(result.length, 2);
    t.equal(
      JSON.parse(result[0]).level,
      "info",
      "log output can be parsed by json",
    );
    t.equal(result[1].trim(), "");

    result = [];
    writeNDJSON(
      mock,
      "info",
      now,
      {
        type: "foo",
      },
      { foo: { bar: { baz: "quix" } } },
    );

    t.equal(result.length, 2);
    t.equal(JSON.parse(result[0])?.type, "foo", "should print log type");

    t.end();
  });
});
