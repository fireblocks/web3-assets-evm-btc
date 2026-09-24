import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const SOPHON_TEST: NativeAssetConfig = {
  type: "native",
  id: "SOPHON_TEST",
  name: "Sophon Testnet",
  symbol: "SOP",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 531050104,
  rpcUrl: "https://rpc.testnet.sophon.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
