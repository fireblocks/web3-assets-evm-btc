import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SOMNIA_TEST: NativeAssetConfig = {
  type: "native",
  id: "SOMNIA_TEST",
  name: "Somnia Test",
  symbol: "SOM",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 50312,
  rpcUrl: "https://dream-rpc.somnia.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
