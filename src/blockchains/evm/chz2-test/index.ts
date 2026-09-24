import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CHZ2_TEST: NativeAssetConfig = {
  type: "native",
  id: "CHZ2_TEST",
  name: "Chiliz Chain Testnet",
  symbol: "CHZ2",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 88882,
  rpcUrl: "https://spicy-rpc.chiliz.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
