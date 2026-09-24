import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const WEMIX: NativeAssetConfig = {
  type: "native",
  id: "WEMIX",
  name: "WEMIX",
  symbol: "WEMIX",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1111,
  rpcUrl: "https://api.wemix.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
