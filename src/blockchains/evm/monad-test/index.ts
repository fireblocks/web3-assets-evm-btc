import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MONAD_TEST: NativeAssetConfig = {
  type: "native",
  id: "MONAD_TEST",
  name: "Monad Testnet",
  symbol: "MON",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 10143,
  rpcUrl: "https://monad-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
