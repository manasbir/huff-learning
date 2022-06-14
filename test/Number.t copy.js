const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let number;

describe("SimpleTesting", function () {
  beforeEach(async function () {
    const Number = await ethers.getContractFactory("string");
    number = await Number.deploy();
    await number.deployed();
  });
  it("Contract is deployed", async function () {
    expect(number.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
   it("will return 'fizzbuzz'/a value at all", async function () {
    expect(await number.returnString()).to.equal("fizzbuzz");
  });
});