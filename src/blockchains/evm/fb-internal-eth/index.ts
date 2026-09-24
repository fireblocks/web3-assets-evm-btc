import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const FB_INTERNAL_ETH: NativeAssetConfig = {
  type: "native",
  id: "FB_INTERNAL_ETH",
  name: "Fireblocks Internal ETH",
  symbol: "FB_",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 20260416,
  rpcUrl: "https://rpc.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
