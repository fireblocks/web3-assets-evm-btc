import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SOPHON: NativeAssetConfig = {
  type: "native",
  id: "SOPHON",
  name: "Sophon",
  symbol: "SOP",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 50104,
  rpcUrl: "https://rpc.sophon.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
