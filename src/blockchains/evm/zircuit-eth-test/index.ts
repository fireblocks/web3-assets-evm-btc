import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ZIRCUIT_ETH_TEST: NativeAssetConfig = {
  type: "native",
  id: "ZIRCUIT_ETH_TEST",
  name: "Zircuit Testnet",
  symbol: "ZIR",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 48899,
  rpcUrl: "https://rpc.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
