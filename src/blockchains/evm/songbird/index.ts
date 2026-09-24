import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const SGB: NativeAssetConfig = {
  type: 'native',
  id: 'SGB',
  name: 'Legacy Songbird Canary-Network',
  symbol: 'SGB',
  algorithm: Algorithm.ecdsa,
  coinType: 554,
  decimals: 18,
  evmChainId: 19,
  rpcUrl: 'https://songbird-api.flare.network/ext/C/rpc',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};

export * from './tokens';
