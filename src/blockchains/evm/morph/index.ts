import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MORPH: NativeAssetConfig = {
  type: "native",
  id: "MORPH",
  name: "Morph",
  symbol: "MOR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 2818,
  rpcUrl: "https://rpc.morphl2.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
