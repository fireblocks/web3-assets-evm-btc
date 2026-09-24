import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const IOTX_IOTEX: NativeAssetConfig = {
  type: "native",
  id: "IOTX_IOTEX",
  name: "IoTeX",
  symbol: "IOTX",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 4689,
  rpcUrl: "https://babel-api.mainnet.iotex.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
