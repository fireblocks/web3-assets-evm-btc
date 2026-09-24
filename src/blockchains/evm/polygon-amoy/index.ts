import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const AMOY_POLYGON_TEST: NativeAssetConfig = {
  type: "native",
  id: "AMOY_POLYGON_TEST",
  name: "Polygon Amoy",
  symbol: "MATIC",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 80002,
  rpcUrl: "https://polygon-amoy-bor-rpc.publicnode.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
