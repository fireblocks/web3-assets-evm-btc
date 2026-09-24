import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const PLUME_PLUME: NativeAssetConfig = {
  type: 'native',
  id: 'PLUME_PLUME',
  name: 'Plume',
  symbol: 'PLU',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 98866,
  rpcUrl: 'https://plume.drpc.org',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
