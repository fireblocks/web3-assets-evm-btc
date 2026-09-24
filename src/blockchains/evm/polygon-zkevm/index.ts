import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const ETH_ZKEVM: NativeAssetConfig = {
  type: "native",
  id: "ETH_ZKEVM",
  name: "Ethereum (Polygon zkEVM)",
  symbol: "ETH",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 1101,
  rpcUrl: "https://zkevm-rpc.com",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
