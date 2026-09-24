import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const BERACHAIN: NativeAssetConfig = {
  type: 'native',
  id: 'BERACHAIN',
  name: 'Berachain',
  symbol: 'BER',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 80094,
  rpcUrl: 'https://berachain-rpc.publicnode.com',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
