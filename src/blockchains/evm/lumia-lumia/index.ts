import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const LUMIA_LUMIA: NativeAssetConfig = {
  type: 'native',
  id: 'LUMIA_LUMIA',
  name: 'Lumia Mainnet',
  symbol: 'LUM',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 994873017,
  rpcUrl: 'https://mainnet-rpc.lumia.org',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
