import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HT_CHAIN: NativeAssetConfig = {
  type: "native",
  id: "HT_CHAIN",
  name: "Huobi ECO Chain",
  symbol: "HT",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 128,
  rpcUrl: "https://rpc.ankr.com/huobichain",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
