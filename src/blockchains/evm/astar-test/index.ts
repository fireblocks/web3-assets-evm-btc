import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ASTAR_TEST: NativeAssetConfig = {
  type: "native",
  id: "ASTAR_TEST",
  name: "Astar Testnet (Shibuya)",
  symbol: "AST",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 81,
  rpcUrl: "https://rpc.shibuya.astar.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
