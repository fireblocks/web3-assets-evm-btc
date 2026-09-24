import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ARB_GOERLI: NativeAssetConfig = {
  type: "native",
  id: "ARB_GOERLI",
  name: "Arbitrum Goerli",
  symbol: "ARB",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 421613,
  rpcUrl: "https://goerli-rollup.arbitrum.io/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
