import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const VLX_VLX: NativeAssetConfig = {
  type: "native",
  id: "VLX_VLX",
  name: "Velas",
  symbol: "VLX",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 106,
  rpcUrl: "https://mainnet.velas.com/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
