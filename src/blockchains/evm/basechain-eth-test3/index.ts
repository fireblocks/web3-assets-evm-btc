import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const BASECHAIN_ETH_TEST3: NativeAssetConfig = {
  type: "native",
  id: "BASECHAIN_ETH_TEST3",
  name: "Base Goerli",
  symbol: "BAS",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 84531,
  rpcUrl: "https://goerli.base.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
