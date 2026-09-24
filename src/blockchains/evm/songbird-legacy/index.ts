import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SONGBIRD_LEGACY: NativeAssetConfig = {
  type: "native",
  id: "SONGBIRD_LEGACY",
  name: "Songbird Canary-Network (Legacy derivation)",
  symbol: "SON",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 19,
  rpcUrl: "https://songbird-api.flare.network/ext/C/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
