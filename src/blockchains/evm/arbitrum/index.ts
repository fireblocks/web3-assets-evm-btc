import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_AETH: NativeAssetConfig = {
  type: "native",
  id: "ETH-AETH",
  name: "Ethereum (Arbitrum)",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 42161,
  rpcUrl: "https://arb1.arbitrum.io/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
