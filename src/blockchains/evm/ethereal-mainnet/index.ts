import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETHEREAL_MAINNET: NativeAssetConfig = {
  type: "native",
  id: "ETHEREAL_MAINNET",
  name: "Ethereal Mainnet",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 5064014,
  rpcUrl: "https://rpc.ethereal.trade",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
