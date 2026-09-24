import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const SONIC_TEST: NativeAssetConfig = {
  type: "native",
  id: "SONIC_TEST",
  name: "Sonic Blaze Testnet",
  symbol: "S",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 57054,
  rpcUrl: "https://rpc.blaze.soniclabs.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
