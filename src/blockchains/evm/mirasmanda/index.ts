import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const MIRASMANDA: NativeAssetConfig = {
  type: "native",
  id: "MIRASMANDA",
  name: "Mirasmanda",
  symbol: "MIR",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1213549903,
  rpcUrl: "https://rpc.evm.mirasmanda.uz",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
