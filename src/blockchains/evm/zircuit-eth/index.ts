import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZIRCUIT_ETH: NativeAssetConfig = {
  type: "native",
  id: "ZIRCUIT_ETH",
  name: "Zircuit",
  symbol: "ZIR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 48900,
  rpcUrl: "https://mainnet.zircuit.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
