const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let sqrt4;

describe("sqrt4 tests", function () {
  beforeEach(async function () {
    const Sqrt4 = await ethers.getContractFactory("sqrt4");
    sqrt4 = await Sqrt4.deploy();
    await sqrt4.deployed();
  });
  it("Contract is deployed", async function () {
    expect(sqrt4.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
    it("4", async function () {
    expect(await sqrt4.proxyMacro(4)).to.equal(2);
  });
  it("9", async function () {
    expect(await sqrt4.proxyMacro(9)).to.equal(3);
  });
  it("151", async function () {
    expect(await sqrt4.proxyMacro(151)).to.equal(12);
  });
});