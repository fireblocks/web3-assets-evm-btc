import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const CRONOS: NativeAssetConfig = {
  type: "native",
  id: "CRONOS",
  name: "Cronos",
  symbol: "CRO",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 25,
  rpcUrl: "https://cronos-evm-rpc.publicnode.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
