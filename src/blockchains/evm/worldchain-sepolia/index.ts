import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const WORLDCHAIN_TEST: NativeAssetConfig = {
  type: "native",
  id: "WORLDCHAIN_TEST",
  name: "World Chain Sepolia",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 4801,
  rpcUrl: "https://worldchain-sepolia.g.alchemy.com/public",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
