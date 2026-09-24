import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const COREDAO_TEST: NativeAssetConfig = {
  type: "native",
  id: "COREDAO_TEST",
  name: "Core DAO Testnet",
  symbol: "COR",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 1115,
  rpcUrl: "https://core-testnet.drpc.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
