import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CAMINO_COLUMBUS_TEST: NativeAssetConfig = {
  type: "native",
  id: "CAMINO_COLUMBUS_TEST",
  name: "Camino Columbus",
  symbol: "CAM",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 501,
  rpcUrl: "https://columbus.camino.network/ext/bc/C/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
