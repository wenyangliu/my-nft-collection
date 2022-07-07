const fs = require('fs')
const pinataSDK = require('@pinata/sdk')
require('dotenv').config()
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET)

const readableStreamForFile = fs.createReadStream('./images/3.jpeg')
const options = {
  pinataMetadata: {
    name: 'MY NFT COLLECTION',
    keyvalues: {
      customKey: 'customValue',
      customKey2: 'customValue2'
    }
  },
  pinataOptions: {
    cidVersion: 0
  }
}

const pinFileToIPFS = () => {
  return pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then(result => {
      return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
    })
    .catch(err => {
      console.log(err)
    })
}

const pinJSONToIPFS = (body) => {
  return pinata
  .pinJSONToIPFS(body, options)
  .then(result => {
    return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
  })
  .catch(err => {
    console.log(err)
  })
}

const getMetadata = async () => {
  const imageUrl = await pinFileToIPFS()
  const body = {
    name: 'My NFT Collection',
    description: 'This is my awesome collection of NTFs',
    image: imageUrl
  }
  const metadata = await pinJSONToIPFS(body)
  console.log(metadata)
}

getMetadata()

// NTF 1 = https://gateway.pinata.cloud/ipfs/QmcoDuad9Qb1GGGGnEe8X1GbnjiBJkpv3mH3Wmza2QGmNi