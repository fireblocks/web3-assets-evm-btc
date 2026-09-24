import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const DSETH_DEV: NativeAssetConfig = {
  type: "native",
  id: "DSETH_DEV",
  name: "dSETH (Dev)",
  symbol: "DSE",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 19150319,
  rpcUrl: "https://dseth-dev.example.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
