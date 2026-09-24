import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HT_CHAIN_TEST: NativeAssetConfig = {
  type: "native",
  id: "HT_CHAIN_TEST",
  name: "Huobi ECO Chain Testnet",
  symbol: "HT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 256,
  rpcUrl: "https://rpc.ankr.com/huobichain_testnet",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
