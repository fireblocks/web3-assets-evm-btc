import type { TokenAssetConfig } from '../../../../../types';

export const USDC_BASE: TokenAssetConfig = {
  type: 'token',
  id: 'USDC_BASE',
  name: 'USD Coin (Base)',
  symbol: 'USDC',
  blockchainId: 'BASE',
  tokenStandard: 'ERC20',
  decimals: 6,
  contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
};
