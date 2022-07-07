require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

const { ProxyAgent, setGlobalDispatcher } = require('undici')
const proxyAgent = new ProxyAgent('http://127.0.0.1:7890') // change to yours
setGlobalDispatcher(proxyAgent)

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  }
}
