import Web3 from 'web3';
import appConfig from '/app.config';

class Wallet {
  constructor(address, privateKey) {
    this.account = address;
    this.targetPrivateKey = privateKey;
    this.web3 = new Web3(new Web3.providers.HttpProvider(appConfig.rpc));
    this.isWallet = this.web3.eth.accounts.wallet?.[address?.toLowerCase()]?.address === address;
    this.web3.eth.accounts.wallet.add(privateKey);
    this.gas = 5;
    this.gasPrice = '5000000000';
    this.gasLimit = 676588;
    // this.gasPrice = '500000000000';
    // this.gasLimit = 676588;
    this.decimal = 18;
    this.chainId();
  }

  async chainId() {
    this.chainId = await this.web3.eth.getChainId();
  }

  async getBalance(account) {
    return (await this.web3.eth.getBalance(account)) / 1e18;
  }

  async sendTx(params) {
    try {
      const count = await this.web3.eth.getTransactionCount(this.account);
      const rawTransaction = {
        data: '0x00',
        gasPrice: this.gasPrice,
        gasLimit: this.web3.utils.toHex(this.gasLimit),
        nonce: this.web3.utils.toHex(count),
        ...params,
      };
      const receipt = await this.web3.eth.sendTransaction(rawTransaction);

      return receipt;
    } catch (error) {
      return false;
    }
  }

  async getTransaction(txHash) {
    try {
      const response = await this.web3.eth.getTransaction(txHash);
      return response;
    } catch (error) {
      return false;
    }
  }
}

export default Wallet;
