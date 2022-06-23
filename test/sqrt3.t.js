const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let sqrt3;

describe("sqrt3 tests", function () {
  beforeEach(async function () {
    const Sqrt3 = await ethers.getContractFactory("sqrt3");
    sqrt3 = await Sqrt3.deploy();
    await sqrt3.deployed();
  });
  it("Contract is deployed", async function () {
    expect(sqrt3.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
    it("4", async function () {
    expect(await sqrt3.sqrt(4)).to.equal(2);
  });
  it("9", async function () {
    expect(await sqrt3.sqrt(9)).to.equal(3);
  });
  it("151", async function () {
    expect(await sqrt3.sqrt(151)).to.equal(12);
  });
});