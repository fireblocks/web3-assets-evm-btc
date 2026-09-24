import type { TokenAssetConfig } from '../../../../../types';

export const USDC_BNB: TokenAssetConfig = {
  type: 'token',
  id: 'USDC_BNB',
  name: 'USD Coin (BNB Chain)',
  symbol: 'USDC',
  blockchainId: 'BNB',
  tokenStandard: 'ERC20',
  decimals: 18,
  contractAddress: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
};
