import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZKSYNC_ERA_TEST: NativeAssetConfig = {
  type: "native",
  id: "ZKSYNC_ERA_TEST",
  name: "zkSync Era Testnet",
  symbol: "ZKS",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 280,
  rpcUrl: "https://rpc.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
