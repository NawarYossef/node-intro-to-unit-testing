const fizzBuzz = require("../fizzBuzzer");
const should = require("chai").should()

describe("fizzBuzz", () => {
  it("should return the string 'fizz'", () => {
		const normalCases = [
			{num: 3, expected: "fizz"},
			{num: 9, expected: "fizz"},
			{num: 12, expected: "fizz"}
		]
		normalCases.forEach((input) => {
			const answer = fizzBuzz(input.num);
			answer.should.equal(input.expected);
		})
	})

	it("should return the string 'buzz'", () => {
		const normalCases = [
			{num: 5, expected: "buzz"},
			{num: 10, expected: "buzz"}
		]
		normalCases.forEach((input) => {
			const answer = fizzBuzz(input.num);
			answer.should.equal(input.expected);
		})
	})

	it("should return the string 'fizz-buzz'", () => {
		const normalCases = [
			{num: 15, expected: "fizz-buzz"},
			{num: 30, expected: "fizz-buzz"}
		]
		normalCases.forEach((input) => {
			const answer = fizzBuzz(input.num);
			answer.should.equal(input.expected);
		})
	})

	it("should throw an error if input is not a number", () => {
		const badCases = ["1", "string"]
		badCases.forEach((input) => {
			fizzBuzz(input).should.throw(Error);
		})
	})
})