import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ABSTRACT_ETH: NativeAssetConfig = {
  type: "native",
  id: "ABSTRACT_ETH",
  name: "Abstract",
  symbol: "ABS",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 2741,
  rpcUrl: "https://abstract.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
