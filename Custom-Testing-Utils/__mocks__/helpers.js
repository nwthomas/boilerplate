const uuid = require("uuid");

/**
 * This file allows you to mock out testing doubles for verification of your testing.
 * It uses and UUID to verify that your expected and actual are both running live and
 * are using the same ID. This allows for accurate comparisons of your tests.
 *
 * You will need to npm install uuid before this file will work.
 *
 * Then, you will need to create an object in your actual test to present against the
 * mock function created with a UUID below. This object will look something like:
 *
 * const expected = { id: "Custom testing phrase here.", variableExpected }
 *
 * Your jest test will take the form of the following:
 *
 * it("should return the newsly saved variable", () => {
 *    const varaible = "Nathan";
 *    const expected = { id: "Custom testing phrase here.", variable };
 *
 *    const actual = saveVariable(expected);
 *
 *    expect(actual).toEqual(expected);
 * })
 *
 * UUID package ---> https://www.npmjs.com/package/uuid
 */

const saveVariable = variableExpected => {
  return {
    id: uuid(),
    variableExpected
  };
};

module.exports = {
  saveVariable
};
