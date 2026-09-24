import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const INK_ETH: NativeAssetConfig = {
  type: "native",
  id: "INK_ETH",
  name: "Ink",
  symbol: "INK",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 57073,
  rpcUrl: "https://ink.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
