import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CONFLUX_ESPACE_TEST: NativeAssetConfig = {
  type: "native",
  id: "CONFLUX_ESPACE_TEST",
  name: "Conflux eSpace Test",
  symbol: "CON",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 71,
  rpcUrl: "https://evmtestnet.confluxrpc.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
