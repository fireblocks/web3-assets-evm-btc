import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const XDAI_TEST: NativeAssetConfig = {
  type: "native",
  id: "XDAI_TEST",
  name: "Gnosis Chiado",
  symbol: "XDAI",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 10200,
  rpcUrl: "https://rpc.chiadochain.net",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
