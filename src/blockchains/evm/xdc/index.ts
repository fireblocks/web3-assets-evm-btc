import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const XDC: NativeAssetConfig = {
  type: "native",
  id: "XDC",
  name: "XinFin",
  symbol: "XDC",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 50,
  rpcUrl: "https://rpc.ankr.com/xdc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
