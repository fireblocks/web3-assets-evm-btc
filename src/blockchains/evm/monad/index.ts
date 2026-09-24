import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MONAD: NativeAssetConfig = {
  type: "native",
  id: "MONAD",
  name: "Monad",
  symbol: "MON",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 143,
  rpcUrl: "https://monad-mainnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
