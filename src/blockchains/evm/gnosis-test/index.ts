import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const GNOSIS_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'GNOSIS_TEST',
  name: 'Gnosis Testnet',
  symbol: 'GNO',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 10200,
  rpcUrl: 'https://gnosis-chiado-rpc.publicnode.com',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
