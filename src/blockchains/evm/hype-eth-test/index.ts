import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HYPE_ETH_TEST: NativeAssetConfig = {
  type: "native",
  id: "HYPE_ETH_TEST",
  name: "Hyperliquid Test",
  symbol: "HYPE",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 998,
  rpcUrl: "https://hyperliquid-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
