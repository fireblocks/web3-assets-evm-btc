import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const WIREXPAY_ETH: NativeAssetConfig = {
  type: "native",
  id: "WIREXPAY_ETH",
  name: "Wirex Pay Mainnet",
  symbol: "WIR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 31415,
  rpcUrl: "https://rpc.wirexpaychain.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
