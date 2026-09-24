import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const CAMINO: NativeAssetConfig = {
  type: "native",
  id: "CAMINO",
  name: "Camino",
  symbol: "CAM",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 500,
  rpcUrl: "https://api.camino.network/ext/bc/C/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
