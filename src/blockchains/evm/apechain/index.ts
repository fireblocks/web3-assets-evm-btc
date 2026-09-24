import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const APECHAIN: NativeAssetConfig = {
  type: "native",
  id: "APECHAIN",
  name: "ApeChain",
  symbol: "APE",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 33139,
  rpcUrl: "https://api.apechain.com/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
