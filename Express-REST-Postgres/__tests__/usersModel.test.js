const db = require("../database/dbConfig.js");
const {
  find,
  findById,
  insert,
  remove,
  update
} = require("../users/usersModel.js");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("should set DB_ENV to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe(".find()", () => {
    it("should retrieve users successfully from the database", async () => {
      await insert({ username: "dude", password: "password" });
      const users = await find();
      expect(users).toHaveLength(1);
    });

    it("should return undefined then no users are added to the database", async () => {
      const users = await find();
      expect(users.length).toBeFalsy();
    });
  });

  describe(".findById()", () => {
    it("should retrieve a user by ID successfully from the database", async () => {
      await insert({ username: "nate", password: "password" });
      const user = await findById(1);
      expect(user.username).toBe("nate");
    });

    it("should fail when that user cannot be found in the database", async () => {
      const user = await findById(1);
      expect(user).toBeUndefined();
    });
  });

  describe(".insert()", () => {
    it("should insert the provided user", async () => {
      await insert({ username: "nathan", password: "password" });
      const user = await db("users")
        .where({ username: "nathan" })
        .first();
      expect(user.username).toBe("nathan");
    });
  });

  describe(".remove()", () => {
    it("should remove users from the database", async () => {
      await insert({ username: "nathan", password: "password" });
      const user = await findById(1);
      expect(user.username).toBe("nathan");
      const deleted = await remove(1);
      expect(deleted).toBeDefined();
    });

    it("should return a falsy value if the value is not deleted from the database", async () => {
      const deleted = await remove(1);
      expect(deleted).toBeFalsy();
    });
  });

  describe(".update()", () => {
    it("should update users in the database", async () => {
      await insert({ username: "user", password: "password" });
      const user = await findById(1);
      expect(user).toBeDefined();
      const updated = await update(1, { username: "nate" });
      expect(updated).toBe(1);
    });

    it("should return a falsy value when trying to update a user in the database", async () => {
      const updated = await update(1, { username: "nate" });
      expect(updated).toBeFalsy();
    });
  });
});
