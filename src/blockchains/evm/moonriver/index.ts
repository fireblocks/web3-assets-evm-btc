import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MOVR_MOVR: NativeAssetConfig = {
  type: "native",
  id: "MOVR_MOVR",
  name: "Moonriver",
  symbol: "MOVR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1285,
  rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
