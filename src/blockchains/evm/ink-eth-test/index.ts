import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const INK_ETH_TEST: NativeAssetConfig = {
  type: "native",
  id: "INK_ETH_TEST",
  name: "Ink Sepolia Test",
  symbol: "INK",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 763373,
  rpcUrl: "https://ink-sepolia.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
