const app = require("../app");
const request = require("supertest");
const nock = require("nock");

jest.mock("../hello/Worlds.js", () => () => {
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

test('Should return "Hello World" message', (done) => {
  nock("http://104.236.50.54:8080")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/messages")
    .reply(200, { message: "Hello" });

  request(app)
    .get("/greet")
    .expect("Content-Type", /json/)
    .expect(200, { message: "Hello World" })
    .end((err, res) => {
      if (err) throw err;
      done();
    });
});

test("Should return error message if external gateway error", (done) => {
  nock("http://104.236.50.54:8080")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/messages")
    .reply(500);

  request(app)
    .get("/greet")
    .expect("Content-Type", /json/)
    .expect(200, {
      message: "Request failed with status code 500 undefined",
    })
    .end((err, res) => {
      if (err) throw err;
      done();
    });
});
