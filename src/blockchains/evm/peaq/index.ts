import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const PEAQ: NativeAssetConfig = {
  type: "native",
  id: "PEAQ",
  name: "Peaq",
  symbol: "PEAQ",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 3338,
  rpcUrl: "https://quicknode1.peaq.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
