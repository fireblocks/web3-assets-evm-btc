import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HT_TEST: NativeAssetConfig = {
  type: "native",
  id: "HT_TEST",
  name: "HT Chain Testnet",
  symbol: "HT",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 256,
  rpcUrl: "https://hecotestapi.terminet.io/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
