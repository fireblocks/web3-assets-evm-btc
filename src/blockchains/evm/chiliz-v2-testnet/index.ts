import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CHZ_CHZ2_TEST: NativeAssetConfig = {
  type: "native",
  id: "CHZ_CHZ2_TEST",
  name: "Chiliz Testnet",
  symbol: "CHZ",
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
