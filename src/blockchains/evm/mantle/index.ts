import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MANTLE: NativeAssetConfig = {
  type: "native",
  id: "MANTLE",
  name: "Mantle",
  symbol: "MNT",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 5000,
  rpcUrl: "https://rpc.mantle.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
