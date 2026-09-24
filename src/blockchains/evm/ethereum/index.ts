import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ETH: NativeAssetConfig = {
  type: 'native',
  id: 'ETH',
  name: 'Ethereum',
  symbol: 'ETH',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1,
  rpcUrl: 'https://eth-mainnet.public.blastapi.io',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};

export * from './tokens';
