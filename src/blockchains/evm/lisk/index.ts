import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const LISK: NativeAssetConfig = {
  type: "native",
  id: "LISK",
  name: "Lisk",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1135,
  rpcUrl: "https://rpc.api.lisk.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
