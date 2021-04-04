const Token = artifacts.require("MyToken.sol");

var chai = require("chai");
const BN = web3.utils.BN;
var chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token Test",async () =>{
    let instance = await Token.deployed();
    let totalSupply = await instance.totalSupply();
    expect(instance.balanceOf(accounts[0])).to.eventually.be.a.bignumber.equal(totalSupply);
});