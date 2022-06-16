const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let number;

describe("sqrt tests", function () {
  beforeEach(async function () {
    const Number = await ethers.getContractFactory("sqrt");
    number = await Number.deploy();
    await number.deployed();
  });
  it("Contract is deployed", async function () {
    expect(number.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
   it("is greater than", async function () {
    expect(await number.sqrt(15)).to.equal(1);
  });
  it("i sless than", async function () {
    expect(await number.sqrt(2)).to.equal(1);
  });
});