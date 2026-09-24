import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CENTRIFUGE_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'CENTRIFUGE_TEST',
  name: 'Centrifuge Test',
  symbol: 'CEN',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 2090,
  rpcUrl: 'https://testnet.centrifuge.io',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
