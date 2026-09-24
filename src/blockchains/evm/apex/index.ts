import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const APEX: NativeAssetConfig = {
  type: "native",
  id: "APEX",
  name: "Apex Fusion Nexus",
  symbol: "APEX",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 9069,
  rpcUrl: "https://rpc.apexfusionnexus.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
