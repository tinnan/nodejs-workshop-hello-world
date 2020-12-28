const nock = require("nock");
const helloWorldService = require("../../hello/helloWorldService");

jest.mock("../../hello/Worlds.js", () => () => {
  const sequelizeMock = require("sequelize-mock");
  const dbMock = new sequelizeMock();
  const myData = dbMock.define("Worlds");
  myData.$queueResult(
    myData.build({
      id: 1,
      msg: "World",
    })
  );
  return myData;
});

test('Should return "Hello World" message', async () => {
  nock("http://104.236.50.54:8080")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/messages")
    .reply(200, { message: "Hello" });
  const helloWorldText = await helloWorldService.greet();
  expect(helloWorldText).toBe("Hello World");
});

test("Should return error if external gateway return error", async () => {
  nock("http://104.236.50.54:8080")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/messages")
    .reply(500);

  const helloWorldResponse = await helloWorldService.greet();
  expect(helloWorldResponse).toBe(
    "Request failed with status code 500 undefined"
  );
});
