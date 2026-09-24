import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CHZ_CHZ: NativeAssetConfig = {
  type: "native",
  id: "CHZ_$CHZ",
  name: "Chiliz Legacy",
  symbol: "CHZ",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 88,
  rpcUrl: "https://explorer.chiliz.com/api",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
