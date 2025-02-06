import { expect, test, beforeAll } from 'vitest';
import { Web3 } from 'web3';

const providerUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545/';

async function createAccount() {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

    // Generate a random account
    const account = await web3.eth.accounts.create();
    console.log(account); // This will show the full account object
    const address = web3.eth.accounts.privateKeyToAccount(account.privateKey).address;

    console.log('Private Key:', account.privateKey);
    console.log('Address:', address);
  } catch (error) {
    console.error('Error creating account:', error);
  }
}

test("========== sample ==========", async () => {
  await createAccount();
})