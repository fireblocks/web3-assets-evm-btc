import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const OPTIMISTIC_KOV: NativeAssetConfig = {
  type: "native",
  id: "OPTIMISTIC_KOV",
  name: "Optimism Testnet Kovan",
  symbol: "OPT",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 69,
  rpcUrl: "https://kovan.optimism.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
