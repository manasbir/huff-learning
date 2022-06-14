const { expect } = require("chai");
const { assert } = require("console");
const { ethers } = require("hardhat");

let number;

describe("SimpleTesting", function () {
  beforeEach(async function () {
    const Number = await ethers.getContractFactory("Number");
    number = await Number.deploy();
    await number.deployed();
  });
  it("Contract is deployed", async function () {
    expect(number.address).to.not.equal(
      "0x0000000000000000000000000000000000000000"
    );
  });
  it("addition works!", async function () {
    expect(await number.adding(2,3)).to.equal(5);
  });
  it("returns 10", async function () {
    expect(await number.returnNumber()).to.equal(10);
  });
  it("adds 4 and 5 to get 9", async function () {
    expect(await number.additionTest()).to.equal(9);
  });
  it("adds the two numbers correctly", async function () {
    expect(await number.adding(2,3)).to.equal(5);
  });
  it("will tell us if even or odd", async function () {
    expect(await number.isEven(5)).to.equal(false);
    expect(await number.isEven(4)).to.equal(true);
  });
});