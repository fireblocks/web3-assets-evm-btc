import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BNB_TEST: NativeAssetConfig = {
  type: "native",
  id: "BNB_TEST",
  name: "BNB Smart Chain Testnet",
  symbol: "BNB",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 97,
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
