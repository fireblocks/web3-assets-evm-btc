import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZILLIQA_TEST: NativeAssetConfig = {
  type: "native",
  id: "ZILLIQA_TEST",
  name: "Zilliqa EVM Test",
  symbol: "ZIL",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 33101,
  rpcUrl: "https://api.testnet.zilliqa.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
