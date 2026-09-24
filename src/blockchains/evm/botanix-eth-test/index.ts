import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BOTANIX_ETH_TEST: NativeAssetConfig = {
  type: "native",
  id: "BOTANIX_ETH_TEST",
  name: "Botanix Testnet",
  symbol: "BOT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 3636,
  rpcUrl: "https://rpc.ankr.com/botanix_testnet",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
