import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const TAC: NativeAssetConfig = {
  type: "native",
  id: "TAC",
  name: "TAC Mainnet",
  symbol: "TAC",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 239,
  rpcUrl: "https://rpc.ankr.com/tac",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
