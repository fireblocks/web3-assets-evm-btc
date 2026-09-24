import type { TokenAssetConfig } from '../../../../../types';

export const USDT_ERC20: TokenAssetConfig = {
  type: 'token',
  id: 'USDT_ERC20',
  name: 'Tether USD (Ethereum)',
  symbol: 'USDT',
  blockchainId: 'ETH',
  tokenStandard: 'ERC20',
  decimals: 6,
  contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
};
