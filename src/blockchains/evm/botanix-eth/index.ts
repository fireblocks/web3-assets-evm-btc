import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BOTANIX_ETH: NativeAssetConfig = {
  type: "native",
  id: "BOTANIX_ETH",
  name: "Botanix Mainnet",
  symbol: "BOT",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 3637,
  rpcUrl: "https://rpc.ankr.com/botanix_mainnet",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
