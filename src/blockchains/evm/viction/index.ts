import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const VICTION: NativeAssetConfig = {
  type: "native",
  id: "VICTION",
  name: "Viction",
  symbol: "VIC",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 88,
  rpcUrl: "https://rpc.viction.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
