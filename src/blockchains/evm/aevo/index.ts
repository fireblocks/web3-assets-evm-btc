import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const AEVO: NativeAssetConfig = {
  type: 'native',
  id: 'AEVO',
  name: 'Aevo',
  symbol: 'AEVO',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 2999,
  rpcUrl: 'https://mainnet.bityuan.com/eth',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
