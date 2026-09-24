import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const KLAY_KAIA: NativeAssetConfig = {
  type: "native",
  id: "KLAY_KAIA",
  name: "Kaia",
  symbol: "KAIA",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 8217,
  rpcUrl: "https://public-en.node.kaia.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
