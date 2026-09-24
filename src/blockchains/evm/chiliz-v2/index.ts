import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CHZ_CHZ2: NativeAssetConfig = {
  type: "native",
  id: "CHZ_CHZ2",
  name: "Chiliz Chain",
  symbol: "CHZ",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 88888,
  rpcUrl: "https://rpc.ankr.com/chiliz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
