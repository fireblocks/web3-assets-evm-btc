import type { NativeAssetConfig } from '../../../types';
import { Algorithm } from '../../../types';

export const MANTLE_TEST: NativeAssetConfig = {
  type: "native",
  id: "MANTLE_TEST",
  name: "Mantle Sepolia",
  symbol: "MNT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 5003,
  rpcUrl: "https://rpc.sepolia.mantle.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
