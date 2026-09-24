import type { TokenAssetConfig } from '../../../../../types';

export const USDT_BNB: TokenAssetConfig = {
  type: 'token',
  id: 'USDT_BNB',
  name: 'Tether USD (BNB Chain)',
  symbol: 'USDT',
  blockchainId: 'BNB',
  tokenStandard: 'ERC20',
  decimals: 18,
  contractAddress: '0x55d398326f99059fF775485246999027B3197955',
};
