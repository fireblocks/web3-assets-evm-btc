import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const KAVA_KAVA: NativeAssetConfig = {
  type: "native",
  id: "KAVA_KAVA",
  name: "Kava",
  symbol: "KAVA",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 2222,
  rpcUrl: "https://evm.kava-rpc.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
