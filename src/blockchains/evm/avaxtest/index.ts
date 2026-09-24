import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const AVAXTEST: NativeAssetConfig = {
  type: 'native',
  id: 'AVAXTEST',
  name: 'Avalanche Fuji Testnet',
  symbol: 'AVAX',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 43113,
  rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
