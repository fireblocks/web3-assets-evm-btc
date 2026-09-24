import type { TokenAssetConfig } from '../../../../../types';

export const USDC_POL: TokenAssetConfig = {
  type: 'token',
  id: 'USDC_POL',
  name: 'USD Coin (Polygon)',
  symbol: 'USDC',
  blockchainId: 'MATIC_POLYGON',
  tokenStandard: 'ERC20',
  decimals: 6,
  contractAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
};
