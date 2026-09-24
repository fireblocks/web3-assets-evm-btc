import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const TEMPO: NativeAssetConfig = {
  type: "native",
  id: "TEMPO",
  name: "Tempo",
  symbol: "TEM",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 4217,
  rpcUrl: "https://tempo-mainnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
