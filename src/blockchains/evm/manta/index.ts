import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MANTA: NativeAssetConfig = {
  type: "native",
  id: "MANTA",
  name: "Manta",
  symbol: "MAN",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 169,
  rpcUrl: "https://1rpc.io/manta",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
