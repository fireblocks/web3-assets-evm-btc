import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const GLMR_GLMR: NativeAssetConfig = {
  type: "native",
  id: "GLMR_GLMR",
  name: "Moonbeam",
  symbol: "GLMR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1284,
  rpcUrl: "https://rpc.api.moonbeam.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
