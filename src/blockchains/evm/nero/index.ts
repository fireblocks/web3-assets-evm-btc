import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const NERO: NativeAssetConfig = {
  type: "native",
  id: "NERO",
  name: "NERO",
  symbol: "NERO",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1689,
  rpcUrl: "https://rpc.nerochain.io",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
