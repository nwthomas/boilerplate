const supertest = require("supertest");
const server = require("../api/server.js");

describe("server.js", () => {
  describe("GET / request", () => {
    it("responds with 200 OK status", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });

    it("responds with 200 OK status", async () => {
      await supertest(server)
        .get("/")
        .expect("Content-Type", /html/i);
    });
  });
});
