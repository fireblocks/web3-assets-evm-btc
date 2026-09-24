import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const OMNI_EVM: NativeAssetConfig = {
  type: 'native',
  id: 'OMNI_EVM',
  name: 'Nomina',
  symbol: 'OMNI',
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 166,
  rpcUrl: 'https://mainnet.nomina.io',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
