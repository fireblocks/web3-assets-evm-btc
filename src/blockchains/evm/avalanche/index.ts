import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const AVAX: NativeAssetConfig = {
  type: 'native',
  id: 'AVAX',
  name: 'Avalanche',
  symbol: 'AVAX',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 43114,
  rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};

export * from './tokens';
