import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const FLOW_CHAIN: NativeAssetConfig = {
  type: "native",
  id: "FLOW_CHAIN",
  name: "Flow EVM",
  symbol: "FLOW",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 747,
  rpcUrl: "https://mainnet.evm.nodes.onflow.org",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
