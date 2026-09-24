import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CHZ2: NativeAssetConfig = {
  type: "native",
  id: "CHZ2",
  name: "Chiliz Chain",
  symbol: "CHZ2",
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
