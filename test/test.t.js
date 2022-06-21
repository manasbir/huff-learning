const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let test;

describe("return string test", function () {
  beforeEach(async function () {
    const Test = await ethers.getContractFactory("test");
    test = await Test.deploy();
    await test.deployed();
  });
  it("Contract is deployed", async function () {
    expect(test.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
   it("will return 'fizzbuzz'/a value at all", async function () {
    expect(await test.test(3,4)).to.equal(true);
  });
  it("will return 'fizzbuzz'/a value at all", async function () {
    //expect(await test.test()).to.equal(3);
  });
});