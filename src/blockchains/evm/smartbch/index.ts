import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SMARTBCH: NativeAssetConfig = {
  type: "native",
  id: "SMARTBCH",
  name: "SmartBCH",
  symbol: "BCH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 10000,
  rpcUrl: "https://smartbch.greyh.at",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
