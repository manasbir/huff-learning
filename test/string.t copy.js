const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let orTest;

describe("return string test", function () {
  beforeEach(async function () {
    const OrTest = await ethers.getContractFactory("orTest");
    orTest = await OrTest.deploy();
    await orTest.deployed();
  });
  it("Contract is deployed", async function () {
    expect(orTest.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
   it("will return equal", async function () {
    expect(await orTest.greaterThanOrEqual(8,8)).to.equal(true);
  });
  it("will get the greater", async function () {
    expect(await orTest.greaterThanOrEqual(10,8)).to.equal(true);
  });
  it("will get the less than", async function () {
    expect(await orTest.greaterThanOrEqual(7,8)).to.equal(false);
  });
});