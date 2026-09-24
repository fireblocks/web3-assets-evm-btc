import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const AURORA_DEV: NativeAssetConfig = {
  type: 'native',
  id: 'AURORA_DEV',
  name: 'Aurora',
  symbol: 'ETH',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1313161554,
  rpcUrl: 'https://mainnet.aurora.dev',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
