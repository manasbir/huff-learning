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
    expect(await number.sqrt(25)).to.equal(5);
    console.log('25 ', await number.sqrt(25));
  });
  it("i sless than", async function () {
    expect(await number.sqrt(9)).to.equal(3);
    console.log('9 ', await number.sqrt(9))
  });
});