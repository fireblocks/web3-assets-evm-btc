import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZKSYNC_ERA_SEPOLIA: NativeAssetConfig = {
  type: "native",
  id: "ZKSYNC_ERA_SEPOLIA",
  name: "zkSync Era Sepolia",
  symbol: "ZKS",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 300,
  rpcUrl: "https://endpoints.omniatech.io/v1/zksync-era/sepolia/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
