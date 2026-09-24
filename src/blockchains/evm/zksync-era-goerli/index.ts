import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_ZKSYNC_ERA_TEST: NativeAssetConfig = {
  type: "native",
  id: "ETH_ZKSYNC_ERA_TEST",
  name: "Ethereum (zkSync Era Goerli)",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 280,
  rpcUrl: "https://sepolia.era.zksync.dev",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
