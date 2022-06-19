const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let sqrt2;

describe("sqrt tests", function () {
  beforeEach(async function () {
    const Sqrt2 = await ethers.getContractFactory("sqrt2");
    sqrt2 = await Sqrt2.deploy();
    await sqrt2.deployed();
  });
  it("Contract is deployed", async function () {
    expect(sqrt2.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
    it("is greater than", async function () {
    expect(await sqrt2.sqrt(25)).to.equal(0);
  });
  it("i sless than", async function () {
    expect(await sqrt2.sqrt(9)).to.equal(0);
  });
  it("i sless than", async function () {
    expect(await sqrt2.sqrt(36)).to.equal(0);
  });
});