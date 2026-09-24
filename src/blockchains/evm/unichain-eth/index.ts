import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const UNICHAIN_ETH: NativeAssetConfig = {
  type: "native",
  id: "UNICHAIN_ETH",
  name: "Unichain",
  symbol: "UNI",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 130,
  rpcUrl: "https://unichain-rpc.publicnode.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
