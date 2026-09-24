import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const RBTC: NativeAssetConfig = {
  type: 'native',
  id: 'RBTC',
  name: 'Rootstock',
  symbol: 'RBTC',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 30,
  rpcUrl: 'https://public-node.rsk.co',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
