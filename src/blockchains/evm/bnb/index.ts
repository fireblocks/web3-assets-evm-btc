import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const BNB: NativeAssetConfig = {
  type: 'native',
  id: 'BNB',
  name: 'BNB Chain',
  symbol: 'BNB',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 56,
  rpcUrl: 'https://bsc-dataseed.binance.org',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};

export * from './tokens';
