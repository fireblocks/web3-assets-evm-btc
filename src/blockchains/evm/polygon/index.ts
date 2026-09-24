import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const MATIC_POLYGON: NativeAssetConfig = {
  type: 'native',
  id: 'MATIC_POLYGON',
  name: 'Polygon',
  symbol: 'POL',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 137,
  rpcUrl: 'https://polygon-bor-rpc.publicnode.com',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};

export * from './tokens';
