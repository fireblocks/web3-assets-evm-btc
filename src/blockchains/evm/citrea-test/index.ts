import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CITREA_TEST: NativeAssetConfig = {
  type: "native",
  id: "CITREA_TEST",
  name: "cBTC (Test)",
  symbol: "CIT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 5115,
  rpcUrl: "https://rpc.testnet.citrea.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
