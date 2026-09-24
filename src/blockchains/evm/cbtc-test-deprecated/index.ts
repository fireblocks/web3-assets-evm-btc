import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const cBTC_TEST_DEPRECATED: NativeAssetConfig = {
  type: "native",
  id: "cBTC_TEST_DEPRECATED",
  name: "Citrea Bitcoin (Test)",
  symbol: "CBT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 5115,
  rpcUrl: "https://rpc.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
