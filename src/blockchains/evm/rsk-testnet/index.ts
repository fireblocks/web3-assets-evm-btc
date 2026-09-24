import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const RBTC_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'RBTC_TEST',
  name: 'Rootstock Testnet',
  symbol: 'RBTC',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 31,
  rpcUrl: 'https://public-node.testnet.rsk.co',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
