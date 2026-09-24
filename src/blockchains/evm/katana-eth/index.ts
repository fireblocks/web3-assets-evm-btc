import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const KATANA_ETH: NativeAssetConfig = {
  type: "native",
  id: "KATANA_ETH",
  name: "Katana",
  symbol: "KAT",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 747474,
  rpcUrl: "https://katana.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
