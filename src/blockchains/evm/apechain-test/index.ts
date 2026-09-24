import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const APECHAIN_TEST: NativeAssetConfig = {
  type: "native",
  id: "APECHAIN_TEST",
  name: "ApeChain Testnet",
  symbol: "APE",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 33111,
  rpcUrl: "https://testnet.apechain.com/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
