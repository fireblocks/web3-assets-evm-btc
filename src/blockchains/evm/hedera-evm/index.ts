import type { NativeAssetConfig } from "../../../types";
import { Algorithm } from "../../../types";

export const HEDERA_EVM: NativeAssetConfig = {
  type: "native",
  id: "HEDERA_EVM",
  name: "Hedera EVM",
  symbol: "HED",
  algorithm: Algorithm.ecdsa,
  coinType: 60,
  decimals: 18,
  evmChainId: 295,
  rpcUrl: "https://mainnet.hedera.api.hgraph.io/rpc",
  addressCapabilities: {
    supportsMultipleAddresses: false,
    derivationStrategy: "single",
  },
};
