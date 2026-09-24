import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ARC_TEST: NativeAssetConfig = {
  type: "native",
  id: "ARC_TEST",
  name: "Arc Testnet",
  symbol: "ARC",
  algorithm: Algorithm.ecdsa,
  coinType: 1,
  decimals: 18,
  evmChainId: 5042002,
  rpcUrl: "https://testrpc.arc.xyz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
