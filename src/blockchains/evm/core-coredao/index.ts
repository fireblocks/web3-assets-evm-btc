import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CORE_COREDAO: NativeAssetConfig = {
  type: "native",
  id: "CORE_COREDAO",
  name: "Core DAO",
  symbol: "CORE",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1116,
  rpcUrl: "https://rpc.coredao.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
