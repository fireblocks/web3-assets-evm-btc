import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SEI: NativeAssetConfig = {
  type: "native",
  id: "SEI",
  name: "Sei",
  symbol: "SEI",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1329,
  rpcUrl: "https://sei.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
