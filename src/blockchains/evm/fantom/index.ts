import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const FTM_FANTOM: NativeAssetConfig = {
  type: "native",
  id: "FTM_FANTOM",
  name: "Fantom",
  symbol: "FTM",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 250,
  rpcUrl: "https://rpcapi.fantom.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
