import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CORE_COREDAO_TEST: NativeAssetConfig = {
  type: "native",
  id: "CORE_COREDAO_TEST",
  name: "Core DAO Testnet",
  symbol: "CORE",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1115,
  rpcUrl: "https://rpc.test.btcs.network",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
