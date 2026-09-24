import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETHERLINK: NativeAssetConfig = {
  type: "native",
  id: "ETHERLINK",
  name: "Etherlink",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 42793,
  rpcUrl: "https://rpc.ankr.com/etherlink_mainnet",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
