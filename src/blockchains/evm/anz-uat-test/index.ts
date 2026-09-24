import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const ANZ_UAT_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'ANZ_UAT_TEST',
  name: 'ANZ ETH UAT Testnet',
  symbol: 'ANZ',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 112312121,
  rpcUrl: 'https://anz-uat.test',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
