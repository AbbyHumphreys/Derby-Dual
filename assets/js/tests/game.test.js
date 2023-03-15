/**
 * @jest-environment jsdom
 */

const { sum, startGame } = require("../game");
const fetch = require('node-fetch');

jest.spyOn(window, "alert").mockImplementation(() => { });

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  console.log(fileContents)
  document.open();
  document.write(fileContents);
  document.close();
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// describe("startGame works correctly", () => {
//   beforeAll(() => {
//     goals = 42;
//     startGame();
// });
//   test("should set goal score to zero", () => {
//       expect(goals).toEqual(0);
//   });
// });
