import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CHZ: NativeAssetConfig = {
  type: "native",
  id: "CHZ",
  name: "Chiliz Legacy Chain",
  symbol: "CHZ",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 99999,
  rpcUrl: "https://rpc.ankr.com/chiliz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
