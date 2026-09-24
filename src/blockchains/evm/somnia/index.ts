import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SOMNIA: NativeAssetConfig = {
  type: "native",
  id: "SOMNIA",
  name: "Somnia",
  symbol: "SOM",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 5031,
  rpcUrl: "https://somnia-rpc.publicnode.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
