import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const MORPH_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'MORPH_TEST',
  name: 'Morph Test',
  symbol: 'MOR',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 2910,
  rpcUrl: 'https://rpc-hoodi.morphl2.io',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
