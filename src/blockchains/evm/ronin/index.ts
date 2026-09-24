import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const RON: NativeAssetConfig = {
  type: "native",
  id: "RON",
  name: "Ronin",
  symbol: "RON",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 2020,
  rpcUrl: "https://api.roninchain.com/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
