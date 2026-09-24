import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const BERACHAIN_ARTIO_TEST: NativeAssetConfig = {
  type: 'native',
  id: 'BERACHAIN_ARTIO_TEST',
  name: 'Berachain Artio Test',
  symbol: 'BER',
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 80084,
  rpcUrl: 'https://artio.rpc.berachain.com',
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: 'single',
  },
};
