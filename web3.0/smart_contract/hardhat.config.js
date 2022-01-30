// https://eth-ropsten.alchemyapi.io/v2/mYw7ZKCp-37SpwssX0AN_o992ydxBgeZ
// https://eth-ropsten.alchemyapi.io/v2/ZG1obJfod0I5YKe5DqyFYy821W7DExGs

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ZG1obJfod0I5YKe5DqyFYy821W7DExGs',
      accounts:['1234567890123456789012345678901234567890123456789012345678901234']
      //accounts:['Put your (64 digit) Metamask Wallet Private Key here in accounts:']
    }
  }
}