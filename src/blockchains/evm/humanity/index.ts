import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HUMANITY: NativeAssetConfig = {
  type: "native",
  id: "HUMANITY",
  name: "Humanity Protocol",
  symbol: "HUM",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 6985385,
  rpcUrl: "https://humanity-mainnet.g.alchemy.com/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
