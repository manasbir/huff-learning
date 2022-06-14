const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let number;

describe("SimpleTesting", function () {
  beforeEach(async function () {
    const Number = await ethers.getContractFactory("fizzbuzz");
    number = await Number.deploy();
    await number.deployed();
  });
  it("Contract is deployed", async function () {
    expect(number.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
   it("will return 'fizzbuzz'", async function () {
    expect(await number.fizzbuzz(15)).to.equal("fizzbuzz");
    expect(await number.fizzbuzz(3)).to.equal("fizz");
    expect(await number.fizzbuzz(5)).to.equal("buzz");
  });
});