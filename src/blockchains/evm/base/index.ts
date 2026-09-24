import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const BASE: NativeAssetConfig = {
  type: 'native',
  id: 'BASE',
  name: 'Base Chain',
  symbol: 'ETH',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 8453,
  rpcUrl: 'https://mainnet.base.org',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};

export * from './tokens';
