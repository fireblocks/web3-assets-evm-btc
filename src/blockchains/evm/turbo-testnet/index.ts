import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const TURBO_TESTNET: NativeAssetConfig = {
  type: "native",
  id: "TURBO_TESTNET",
  name: "Turbo Testnet",
  symbol: "TUR",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 94323,
  rpcUrl: "https://rpc.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
