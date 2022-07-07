# 使用Pinata上传NFT到Opensea

## 运行项目
根目录创建 `.env` 文件
```sh
ALCHEMY_API_KEY_URL = "xxxx"
PRIVATE_KEY = "xxxx"
ETHERSCAN_API = "xxxx"
```
`pinata` 目录下创建 `.env` 文件
```sh
PINATA_API_KEY = "xxxx"
PINATA_API_SECRET = "xxxx"
```

安装
```sh
npm i
npx hardhat run scripts/deploy.js --network rinkeby
```
得到合约地址
运行
```sh
npx hardhat verify --network rinkeby [你的合约地址]
```

如果上面运行不成功，需要修改 `hardhat.config.js`
```js
const proxyAgent = new ProxyAgent('http://127.0.0.1:7890') // 这里需要改成你的代理地址
```

```sh
cd pinata
npm i
node index.js
```

详细教程参考：
[https://wenyangliu.github.io/wenyangliublog/blogs/frontEnd/2022/07/06.html](https://wenyangliu.github.io/wenyangliublog/blogs/frontEnd/2022/07/06.html)
