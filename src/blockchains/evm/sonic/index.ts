import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const SONIC: NativeAssetConfig = {
  type: "native",
  id: "SONIC",
  name: "Sonic",
  symbol: "S",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 146,
  rpcUrl: "https://rpc.soniclabs.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
