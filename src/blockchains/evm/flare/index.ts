import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const FLR: NativeAssetConfig = {
  type: 'native',
  id: 'FLR',
  name: 'Flare',
  symbol: 'FLR',
  algorithm: Algorithm.ecdsa,
  coinType: 554,
  decimals: 18,
  evmChainId: 14,
  rpcUrl: 'https://flare-api.flare.network/ext/C/rpc',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};

export * from './tokens';
