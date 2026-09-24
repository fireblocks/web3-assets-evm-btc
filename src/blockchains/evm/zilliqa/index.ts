import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZILLIQA: NativeAssetConfig = {
  type: "native",
  id: "ZILLIQA",
  name: "Zilliqa EVM Mainnet",
  symbol: "ZIL",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 32769,
  rpcUrl: "https://api.zilliqa.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
