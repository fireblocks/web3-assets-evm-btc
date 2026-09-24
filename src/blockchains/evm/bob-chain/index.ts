import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BOB_CHAIN: NativeAssetConfig = {
  type: "native",
  id: "BOB_CHAIN",
  name: "Bob",
  symbol: "BOB",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 60808,
  rpcUrl: "https://bob.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
