import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SONEIUM_MINATO_TEST: NativeAssetConfig = {
  type: "native",
  id: "SONEIUM_MINATO_TEST",
  name: "Soneium Minato",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1946,
  rpcUrl: "https://rpc.minato.soneium.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
