import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BSC_TEST: NativeAssetConfig = {
  type: "native",
  id: "BSC_TEST",
  name: "BNB Smart Chain Testnet",
  symbol: "BSC",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 97,
  rpcUrl: "https://bsc-testnet.blockpi.network/v1/rpc/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
